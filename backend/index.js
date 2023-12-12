import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser"; 
import recipeRoute from "./routes/recipe.js"

const app = express();


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/recipe',recipeRoute)
 
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
 
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  securityQuestion1: String,
  securityAnswer1: String,
  securityQuestion2: String,
  securityAnswer2: String
});
 
const User = new mongoose.model("User", userSchema);
const feedbackSchema = new mongoose.Schema({
  email: String,
  feedback: String,
  timestamp: { type: Date, default: Date.now }
});
 
const Feedback = new mongoose.model("Feedback", feedbackSchema);
 
// Routes

// Login backend ---------------------------------------------------------

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
 
  try {
    const user = await User.findOne({ email: email });
 
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successful", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
 
// Register backend ---------------------------------------------------------

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, securityQuestion1, securityAnswer1, securityQuestion2, securityAnswer2 } = req.body;
 
    const existingUser = await User.findOne({ email: email });
 
    if (existingUser) {
      return res.status(400).send({ message: "User already registered" });
    }
 
    // Store the password and security information
    const newUser = new User({
      name,
      email,
      password: password,
      securityQuestion1,
      securityAnswer1,
      securityQuestion2,
      securityAnswer2,
    });
 
    await newUser.save();
 
    res.status(201).send({ message: "Successfully Registered, Please login now." });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});


// Reset Password backend ---------------------------------------------------------

// Add this route to handle security answers check
app.post("/reset-password-check-answers", async (req, res) => {
  try {
    const { email, securityAnswer1, securityAnswer2 } = req.body;
 
    // Fetch user based on email and check security answers
    const user = await User.findOne({ email: email });
 
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
 
    // Check security answers
    if (
      user.securityAnswer1 !== securityAnswer1 ||
      user.securityAnswer2 !== securityAnswer2
    ) {
      return res.status(401).send({ message: "Incorrect security answers" });
    }
 
    // If security answers are correct, respond with success
    res.status(200).send({ message: "Security answers are correct" });
  } catch (error) {
    console.error("Error during security answers check:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
 
 
app.post("/reset-password", async (req, res) => {
  try {
    const { email, securityAnswer1, securityAnswer2, newPassword, confirmPassword } = req.body;
 
    // Fetch user based on email and check security answers
    const user = await User.findOne({ email: email });
 
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
 
    // Check security answers
    if (
      user.securityAnswer1 !== securityAnswer1 ||
      user.securityAnswer2 !== securityAnswer2
    ) {
      return res.status(401).send({ message: "Security answers are incorrect" });
    }
 
    // Validate and update the new password
    if (newPassword !== confirmPassword) {
      return res.status(400).send({ message: "Passwords do not match" });
    }
 
    user.password = newPassword;
    await user.save();
 
    res.status(200).send({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error during password reset:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
 
app.post("/forgot-password-check-email", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
 
    if (user) {
      const { securityQuestion1, securityQuestion2 } = user;
      res.json({ securityQuestions: { securityQuestion1, securityQuestion2 } });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
 
 
// Feedback backend ---------------------------------------------------------


app.post("/submit-feedback", async (req, res) => {
  try {
    const { email, feedback } = req.body;
 
    // Store feedback in the database
    const newFeedback = new Feedback({
      email,
      feedback
    });
 
    const savedFeedback = await newFeedback.save();
 
    console.log("Feedback saved successfully:", savedFeedback);
 
    res.status(200).send({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error during feedback submission:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
 
 
app.post("/check-email", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
 
    if (user) {
      res.json({ exists: true, loginEmail: user.email }); 
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error("Error checking email:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
 
 // contact feedback ------------------------------------------------

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/contact', async (req, res) => {
  try {
    // Create a new contact record based on the Contact model
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    // Save the contact form data to the database
    await newContact.save();

    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (err) {
    console.error('Error saving contact form data:', err);
    res.status(500).json({ message: 'Failed to submit contact form' });
  }
})


// Admin users list ---------------------------------------------


app.get('/admin/user-list', async (req, res) => {
  try {
    const users = await User.find({}, 'name email _id');
    res.json({ success: true, users });
  } catch (error) {
    console.error('Fetch user list error:', error);
    res.json({ success: false, message: 'Error fetching user list' });
  }
});
 

app.delete('/admin/delete-user/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;

    await User.findByIdAndDelete(userId);
 
    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

app.listen(9002, () => {
  console.log("BE started at port 9002");
});



//safecode 

// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";
// import nodemailer from "nodemailer";

// const app = express();

// // Express middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors());

// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log("DB Connected");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = new mongoose.model("User", userSchema);

// // Routes
// app.post("/login", async (req, res) => {
//   const { email, password } = req.body;
 
//     try {
//       const user = await User.findOne({ email: email });
   
//       if (user) {
//         if (password === user.password) {
//           res.send({ message: "Login Successful", user: user });
//         } else {
//           res.send({ message: "Password didn't match" });
//         }
//       } else {
//         res.send({ message: "User not registered" });
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       res.status(500).send({ message: "Internal Server Error" });
//     }
//   });

// app.post("/register", async (req, res) => {
//   try {
//           const { name, email, password } = req.body;
     
//           const existingUser = await User.findOne({ email: email });
     
//           if (existingUser) {
//             return res.status(400).send({ message: "User already registered" });
//           }
     
//           // Store the password in plain text (for demonstration purposes only)
//           const newUser = new User({
//             name,
//             email,
//             password: password
//           });
     
//           await newUser.save();
     
//           res.status(201).send({ message: "Successfully Registered, Please login now." });
//         } catch (error) {
//           console.error("Error during registration:", error);
//           res.status(500).send({ message: "Internal Server Error" });
//         }
// });

// app.post("/resetpassword", async (req, res) => {
//   const { email } = req.body;
//   console.log('Received reset password request for email:', email);

//   try {
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(404).send({ message: "User not found" });
//     }

//     const successMessage = 'Password reset link sent successfully!';
//     res.json({ message: successMessage });

//     sendResetEmail(user.email, generateResetLink());
//   } catch (error) {
//     console.error("Error during password reset:", error);
//     res.status(500).send({ message: "Internal Server Error" });
//   }
// });

// function generateResetLink() {
//   return 'https://example.com/reset-password?token=xyz123';
// }

// function sendResetEmail(email, resetLink) {
 
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'chaitanyapavan222@gmail.com', 
//       pass: '12345', 
//     },
//   });

//   const mailOptions = {
//     from: 'your-email@gmail.com', 
//     to: email,
//     subject: 'Password Reset',
//     text: `Click the following link to reset your password: ${resetLink}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending reset email:', error);
//     } else {
//       console.log('Reset email sent:', info.response);
//     }
//   });
// }

// app.listen(9002, () => {
//   console.log("BE started at port 9002");
// });

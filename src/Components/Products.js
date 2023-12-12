// // Products.js

// import React , { useState }from 'react';
// import '../App.css'


// const Product = ({ recipe }) => {
//   const [likes, setLikes] = useState(0);

//   const handleLike = () => {
//     setLikes(likes + 1);
//   };

//   return (
//     <div className="col mb-4 card-container">
//       <div className="card h-100 result-card">
//         <img src={recipe.recipe.image} className="card-img-top" alt="Recipe" />
//         <div className="card-body">
//           <h5 className="card-title">{recipe.recipe.label}</h5>
//           <h4 className="card-text"> Ingredients:</h4>
//           <p>{recipe.recipe.ingredientLines.join(', ')}</p>
//           <h4 className="card-text"> Instructions:</h4>
//           <p className="card-text">
//             <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
//               Click here
//             </a>
//           </p>
//           <button onClick={handleLike} className="btn btn-primary">
//             Like ({likes})
//           </button>
//         </div>
//       </div>
//       <br></br><br></br>
//     </div>
//   );
// };

// const Products = ({ data }) => {
//   return (
//     <div className="container mt-4" style={{ color: 'white' }}>
//       <div className="row row-cols-1 row-cols-md-4 g-3">
//         {data.map((recipe, index) => (
//           <div key={index} className="col mb-4 card-container">
//             <div className="card h-100 result-card">
//               <img src={recipe.recipe.image} className="card-img-top" alt="Recipe" />
//               <div className="card-body">
//                 <h5 className="card-title">{recipe.recipe.label}</h5>
//                 <h4 className="card-text"> Ingredients:</h4>
//                 <p>{recipe.recipe.ingredientLines.join(', ')}</p>
//                 <h4 className="card-text"> Instructions:</h4>
//                 <p className="card-text">
//                   <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
//                     Click here
//                   </a>
//                 </p>
//               </div>
//             </div>
//             <br></br><br></br>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;




import React, { useState } from 'react';
import '../App.css';

const Product = ({ recipe }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userReaction, setUserReaction] = useState(null);

  const handleLike = () => {
    if (userReaction === 'like') {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      setLikes(likes + 1);
      setDislikes(dislikes - (userReaction === 'dislike' ? 1 : 0));
      setUserReaction('like');
    }
  };

  const handleDislike = () => {
    if (userReaction === 'dislike') {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      setDislikes(dislikes + 1);
      setLikes(likes - (userReaction === 'like' ? 1 : 0));
      setUserReaction('dislike');
    }
  };

  return (
    <div key={recipe.recipe.label} className="col mb-4 card-container">
      <div className="card h-100 result-card">
        <img src={recipe.recipe.image} className="card-img-top" alt="Recipe" />
        <div className="card-body">
          <h3 className="card-title">[ {recipe.recipe.label} ]</h3><br></br>
          <h4 className="card-text" style={{color:'yellow'}}> Ingredients:</h4>
          <p>{recipe.recipe.ingredientLines.join(', ')}</p><br></br>
          <h4 className="card-text" style={{color:'yellow'}}>Calories:</h4>
      <p>{recipe.recipe.calories.toFixed(2)} kcal</p><br></br>
          <h4 className="card-text"> Instructions:</h4>
          <p className="card-text">
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
              Click here
            </a>
          </p>
          <button onClick={handleLike} className={`btn ${userReaction === 'like' ? 'btn-primary' : 'btn-outline-primary'}`} style={{width:'20%',marginRight:'-30%'}}>
            Like ({likes})
          </button>
          <button onClick={handleDislike}  className={`btn ${userReaction === 'dislike' ? 'btn-danger' : 'btn-outline-danger'}`} style={{width:'20%',marginLeft:'90%',backgroundColor:'red'}}>
            Dislike ({dislikes})
          </button>
        </div>
      </div>
      <br></br><br></br>
    </div>
  );
};

const Products = ({ data }) => {
  return (
    <div className="container mt-4" style={{ color: 'white' }}>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {data.map((recipe, index) => (
          <Product key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import React, { useState } from 'react'
import Products from './Products';
import { Button } from '@mui/material';
import NavBar from './NavBar';

const Explore = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "8fab9355";
    const YOUR_APP_KEY = "fcc166976523d99bbba23e757d18a6d8";
    const submitHandler = e => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
            response => response.json()
        ).then(
            data => setData(data.hits)
        )
    }
    return (


        <>
            <NavBar />
            <div className='login-container'>
                <center>
                    <h2 style={{ color: 'white' }}>Food Recipe App</h2>
                    <div class="input-box">
                        <form onSubmit={submitHandler}>
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..." />
                            <div className="text-center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className="btn btn-primary mx-auto"
                                    style={{ width: '200px' }}
                                >
                                    Search
                                </Button>
                            </div><br></br><br></br>
                        </form>

                        {data.length >= 1 ? <Products data={data} /> : null}
                    </div >
                </center>
            </div>

        </>
    )
}


export default Explore
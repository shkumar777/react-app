import React from 'react'
import './Home.css'
import Nav from './Nav';


const Home = () => {
    return (
        <div className="responsive-image-container">
            <div>
                <Nav />

            </div>
            <img className="responsive-image" src="kayak.jpeg" alt='logo'></img>
            <h1 className='text-overlay'>KAYAKING</h1>
        </div>
    )
}

export default Home;
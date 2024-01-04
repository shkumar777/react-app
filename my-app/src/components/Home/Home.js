import React from 'react'
import './Home.css'

const Home = ()=>{
    return (
        <div className="responsive-image-container">
                
                <nav className='nav-style'>
                    <a href='#'>About</a>
                    <a href='#'>Day Out</a>
                    <a href='#'>Resort</a>
                    <a href='#'>Contact Us</a>
                </nav>
                <img className="responsive-image" src="kayak.jpeg" alt='logo'></img>
                <h1 className='text-overlay'>KAYAK AT THE BEST PLACE IN THE WORLD</h1>
        </div>
    )
}

export default Home;
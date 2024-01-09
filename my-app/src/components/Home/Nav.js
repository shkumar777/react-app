// Nav.js
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Nav.css';

const Nav = () => {
    return (
        <div id='navbar'>
            <a>About</a>
            <a>Contact US</a>
            <a>Map</a>
            <a>Why ZONE77</a>
        </div>
    );
};

export default Nav;

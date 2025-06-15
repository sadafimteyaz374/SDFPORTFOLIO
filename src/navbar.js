import React from "react";
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Sadaf</div>
            <div className="nav-links">
                <NavLink to="/" exact="true" activeclassname="active">Home</NavLink>
                <NavLink to="/about" activeclassname="active">About</NavLink>
                <NavLink to="/skill" activeclassname="active">Skill</NavLink>
                <NavLink to="/contact" activeclassname="active">Contact</NavLink>
            </div>
        </nav>
    );
};

export default Navbar;

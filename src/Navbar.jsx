import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <Link to={"/"}>Home</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/search"}>Search</Link>
            </div>
        </>
    )
}
export default Navbar;
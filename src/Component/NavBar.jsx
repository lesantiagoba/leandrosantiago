import React from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="NavbarContainer">
            <div className="NavbarContainers-Name">
                <Link className="Links" to="/">Leandro Santiago</Link>
            </div>
            <div className="NavbarContainers-Links">
                <nav>
                    <ul>
                        <li>
                            <Link className="Links" to="/">Education</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/">Skills</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/">Portfolio</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/">Experience</Link>
                        </li>
                        <li>
                            <Link className="Links" to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
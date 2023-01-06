import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Experience from "../pages/Experience";

//const [FormularioContacto, setFormularioContacto] = useState();

const Contact = () =>
{
    let Name = prompt('Please enter your name');
    let Email = prompt('Please write your email');
    let message = prompt('Message');

    if(Name != null && Email != null && message != null)
    {
        alert("The message was sending");
    }
}

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
                            <a  className="Links" href='#Education'>
                                Education 
                            </a>
                        </li>
                        <li>
                            <a  className="Links" href='#Skills'>
                                Skills 
                            </a>
                        </li>
                        <li>
                            <a  className="Links" href='#Portfolio'>
                                Portfolio 
                            </a>
                        </li>
                        <li>
                            <a  className="Links" href='#Experience'>
                                Experience 
                            </a>
                        </li>
                        <li>
                            <Link onClick={() => Contact()}  className="Links" to="/">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;
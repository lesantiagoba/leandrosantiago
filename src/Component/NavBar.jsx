import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import './Navbar.css';
import Experience from "../pages/Experience";
import menuImage from "../Common/img/Profile.png";
//const [FormularioContacto, setFormularioContacto] = useState();

const Navbar = (
    {
         ContactCode = (value) => {
            return value
        }
    }
) => {

    const [navBarshow, setNavBarShow] = useState(100);

    const navClicked = () => {
       alert("Hola mundo");
    }

    return(
            <div className="NavbarContainer">
            <div className="NavbarContainers-Name">
            <div onClick={() => navClicked()} className="buton">
                <img src={menuImage} ></img>
            </div> 
            <a className="Links" href="#">Leandro Santiago</a>
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
                            <a onClick={() => ContactCode(0)}  className="Links" href="#Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        
    )
}

export default Navbar;
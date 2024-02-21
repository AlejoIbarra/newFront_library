import React from "react";
import {RedireccionesMenu} from "./RedireccionesMenu"
import { Link } from "react-router-dom";
/*import {Alquilar}*/

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header className="header bg-black">
            {/*<h1 className="header-text">Librería Cosmos {' '}*/}


            <Link to="/Libros" >
                <img className="primary-logo" src="/Title.png" alt="Título"/>
            </Link>
            
            <RedireccionesMenu float="right"/>
            {/*</h1>*/}
        </header>
    );
};

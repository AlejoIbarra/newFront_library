import React from "react";
import {RedireccionesMenu} from "./RedireccionesMenu"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header className="header bg-black">
            {/*<h1 className="header-text">Librería Cosmos {' '}*/}

            <a href="/Libros">
                <img className="primary-logo" src="/Title.png" alt="Título"/>
            </a>
            <RedireccionesMenu float="right"/>
            {/*</h1>*/}
        </header>
    );
};

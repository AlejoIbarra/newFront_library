import React from "react";
import "../styles/styles.css";
import {RedireccionesMenu} from "./RedireccionesMenu"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBook} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <header className="header">
            <h1 className="header-text">Librería Cosmos {' '}
                <FontAwesomeIcon icon={faBook} className="book-icon"/>
                <RedireccionesMenu float="right"/>
            </h1>
        </header>
    );
};

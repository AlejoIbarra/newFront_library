import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faShoppingCart,faUser   } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";
import { Link } from "react-router-dom";

export const RedireccionesMenu = () => {
    return (
        <>
            <Link to="/Carrito" className="home-icon">
                <FontAwesomeIcon icon={faShoppingCart} />
            </Link>

            <Link to="/Libros" className="home-icon">
                <FontAwesomeIcon icon={faHome} />
            </Link>

            <Link to="/Usuario" className="home-icon">
                <FontAwesomeIcon icon={faUser} />
            </Link>
        </>
    );
};

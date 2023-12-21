import React from "react";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Usuario = ({ name, age, deudas }) => {
    return (
        <div className="usuario">
            <FontAwesomeIcon icon={faUser} className="usuario__icono" />
            <div className="usuario__info">
                <p className="usuario__nombre">
                    <strong>Nombre:</strong> {name}
                </p>
                <p className="usuario__edad">
                    <strong>Edad:</strong> {age}
                </p>
                <p className="usuario__deudas">
                    <strong>Deudas:</strong> {deudas}
                </p>
            </div>
        </div>
    );
};

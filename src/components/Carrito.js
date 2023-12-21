import React, { useContext } from "react";
import { AlquilerContext } from "../context/AlquilerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

export const Carrito = () => {
    const { alquileres, eliminarAlquiler } = useContext(AlquilerContext);

    const handleEliminarClick = (index) => {
        eliminarAlquiler(index);
    };

    return (
        <div className="carrito-container">
            {alquileres.length === 0 ? (
                <p>No hay alquileres en el carrito.</p>
            ) : (
                <>
                    <p>Aquí se encuentran tus alquileres</p>
                    <ul>
                        {alquileres.map((alquiler, index) => (
                            <li key={index} className="alquiler-item">
                                <strong>Nombre del Libro:</strong> {alquiler.libroName},{" "}
                                <strong>Días de Alquiler:</strong> {alquiler.diasAlquiler}
                                <button className="button__eliminar" onClick={() => handleEliminarClick(index)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

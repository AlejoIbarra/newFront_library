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
        <div className="container text-center">
            {alquileres.length === 0 ? (
                <p><b>No hay alquileres en el carrito.</b></p>
            ) : (
                <>
                    <p><b>Aquí se encuentran tus alquileres</b></p>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-danger" onClick={() => handleEliminarClick(2)}>
                                <FontAwesomeIcon icon={faTimes} /> Pagar
                            </button>
                        </div>
                    </div><br></br>
                    {alquileres.map((alquiler, index) => (
                        <div key={index} className="row align-items-center mb-3 rounded-top rounded-bottom border border-dark border-3 p-3">
                            <div className="col-3">
                                <img src={alquiler.libroImage} className="img-fluid" alt={alquiler.libroImage} />
                            </div>
                            <div className="col-3">
                                <p><b>{alquiler.libroName}</b></p>
                            </div>
                            <div className="col-2">
                                <p>{alquiler.diasAlquiler} días de alquiler</p>
                            </div>
                            <div className="col-2">
                                <p className="price-cart-format">${alquiler.libroPrice}</p>
                            </div>
                            <div className="col-2">
                                <button className="btn btn-danger" onClick={() => handleEliminarClick(index)}>
                                    <FontAwesomeIcon icon={faTimes} />
                                </button>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

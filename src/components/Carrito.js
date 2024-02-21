import React, { useContext } from "react";
import { AlquilerContext } from "../context/AlquilerContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

export const Carrito = () => {
    const { alquileres, eliminarAlquiler } = useContext(AlquilerContext);
    let total = 0;

    const handleEliminarClick = (index) => {
        eliminarAlquiler(index);
    };

    const totalPagar = (valor) => {
        total += valor;
    }

    return (
        <div className="container text-center">
            {alquileres.length === 0 ? (
                <p><b>No hay alquileres en el carrito.</b></p>
            ) : (
                <>
                    <p><b>Aquí se encuentran tus alquileres</b></p>
                    <div className="row">
                        <div className="col">
                            <button className="btn btn-success" onClick={() => handleEliminarClick(2)}>
                                <FontAwesomeIcon icon={faDollarSign} /> Pagar
                            </button>

                        </div>
                    </div><br></br>
                    {alquileres.map((alquiler, index) => (
                        <div key={index} className="row align-items-center mb-3 rounded-top rounded-bottom border border-dark border-3 p-3">
                            {totalPagar(alquiler.libroPrice)}
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
                    <div className="row">
                        <div className="col">
                            <p><b>Total a pagar: </b>${total}</p>
                        </div>
                    </div>
                </>

            )}
        </div>
    );
};

import React from 'react';
import { Carrito } from '../components/Carrito';

export const CarritoLibrosPage = () => {
    return (
        <div className="container__page__carrito">
            <h1 className="page-title__page__carrito">Carrito de Libros</h1>
            <Carrito />
            <br/>
        </div>
    );
};

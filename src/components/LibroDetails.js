import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LibroContext } from '../context/LibroContext';
import { LibroNotFound } from './LibroNotFound';
import "../styles/styles.css";

export const LibroDetails = () => {
    const { libroId } = useParams();
    const { libros } = useContext(LibroContext);
    const libro = libros.find((r) => r.id === libroId);

    if (!libro) {
        return <LibroNotFound />;
    }

    return (
        <>
            <br />
            <div className="libro-details-container">
                <div className="libro-details-content">
                    <Link to={`/Libros`} className="volver-button">Volver</Link>
                    <h2>Detalles</h2>
                    <p>{libro.name}</p>
                    <p> <strong> Autor:</strong> {libro.author}</p>
                    <p> <strong> Año de publicación:</strong> {libro.publicationYear}</p>
                    <p> <strong> Categoría:</strong> {libro.category}</p>
                    <p><strong> Precio: </strong> ${libro.price}</p>
                </div>
                <div className="libro-details-image-container">
                    <img className="libro-details-image" src={libro.image} alt={libro.name} />
                    <br/>
                    <Link to={`/alquilar/${libro.id}`} className="ver-detalles-btn">Alquilar</Link>
                </div>
            </div>
            <br />
        </>
    );
};

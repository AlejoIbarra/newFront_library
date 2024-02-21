import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LibroContext } from '../context/LibroContext';
import { LibroNotFound } from './LibroNotFound';
import { Reply,Rocket } from 'react-bootstrap-icons';
import { AlquilarLibro } from './AlquilarLibro';



export const LibroDetails = () => {
    const { libroId } = useParams();
    const { libros } = useContext(LibroContext);
    const libro = libros.find((r) => r.id === libroId);

    if (!libro) {
        return <LibroNotFound />;
    }

    // Function to format to uppercase
    //pasar al final como global
    const convertToUppercase = (text) => {
        return text.toUpperCase();
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Detalles
                    
                        <Link to={`/Libros`} className="link-underline-opacity-0 ml-auto">
                            Volver <Reply />
                        </Link>
                </div>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={libro.image} alt={libro.name} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{convertToUppercase(libro.name)}</h5>
                            <p className="card-text"><strong>Precio: </strong> ${libro.price}</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in fermentum nisl. Nulla facilisi. Vivamus eu aliquet nisl. Duis dapibus libero vitae velit ultricies, vel condimentum ex commodo. Sed at fermentum metus. Etiam eu arcu eu elit lacinia tempor. Integer ut neque bibendum, vestibulum turpis nec.</p>
                            <p className="card-text"><strong className="text-info">Autor: </strong>{libro.author}</p>
                            <p className="card-text"><strong>Año de publicación: </strong> {libro.publicationYear}</p>
                            <p className="card-text"><strong>Categoría: </strong> {libro.category}</p>
                            <AlquilarLibro />




                        </div>
                          <div class="card-footer">

{/*                              <Link to={`/alquilar/${libro.id}`} className="btn btn-outline-dark w-100">
                                  Alquilar <Rocket/>                                              
                              </Link>     */}
                          </div>
                    </div>



                </div>
            </div>
            {/*            <br />
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
            <br />*/}
        </>
    );
};

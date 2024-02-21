import React from "react";
import { Link } from "react-router-dom";
/*import "../styles/styles.css";*/

export const Libro = ({id,name, image, category}) =>{
    return (
      <div className="col-4">
          <div className="card mb-3 d-flex flex-column h-100">
              <Link to={`/libros/${id}`}>
                  <img src={image} alt={name} className="card-img-top img-thumbnail square-image" />
          </Link>

              <div className="card-body mr-4">
                  <h5 className='card-title'>{name}</h5>
                  <p><b>Categoria:</b> {category}</p>
                      <Link to={`/libros/${id}`} className="btn btn-outline-dark  position-absolute bottom-0 mb-2 ml-0 mr-4">Ver detalles</Link>

              </div>
          </div>
      </div>
    );
}


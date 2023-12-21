import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export const Libro = ({id,name, image, category}) =>{
    return (
      <div>
          <h3>{name}</h3>
          <img src={image} alt={name} className="libro-image" />
          <p> <b>Categoria:</b> {category}</p>
          <Link to={`/libros/${id}`} className="volver-button">Ver detalles</Link>
      </div>
    );
}


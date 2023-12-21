import React, { useContext, useEffect, useState } from "react";
import { LibroContext } from "../context/LibroContext";
import { Libro } from "../components/Libro";
import { LinearProgress } from "@mui/material";
import "../styles/styles.css";
import { Busqueda } from "../components/Busqueda";

export const MainPage = () => {
  const { libros } = useContext(LibroContext);
  const [librosFiltrados, setLibrosFiltrados] = useState(libros);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(libros);
    setLibrosFiltrados(libros);
  }, [libros]);

  useEffect(() => {
    librosFiltrados.length > 0 ? setLoading(false) : setLoading(true);
  }, [librosFiltrados]);

  return (
    <div className="main-page-container">
      <Busqueda setLibrosFiltrados={setLibrosFiltrados} />
      <h2>Libros</h2>
      <div className="libros-container">
        {!loading ? (
          librosFiltrados.map((libro, index) => (
            <Libro
              key={index}
              id={libro.id}
              name={libro.name}
              image={libro.image}
              category={libro.category}
            />
          ))
        ) : (
          <LinearProgress color="secondary" />
        )}
      </div>
    </div>
  );
};

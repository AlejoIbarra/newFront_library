import React, { useState, useContext } from "react";
import { LibroContext } from "../context/LibroContext";
import "../styles/styles.css";

export const Busqueda = ({ setLibrosFiltrados }) => {
    const [search, setSearch] = useState("");
    const { libros } = useContext(LibroContext);

    const searcher = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);

        const filteredLibros = libros.filter(
            (dato) => dato.name.toLowerCase().includes(searchTerm)
        );
        setLibrosFiltrados(filteredLibros);
    };

    return (
        <div className="busqueda-container">
            <input
                className="busqueda-input"
                value={search}
                type="text"
                placeholder="Buscar"
                onChange={searcher}
            />
        </div>
    );
};

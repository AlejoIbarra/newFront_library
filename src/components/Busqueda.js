import React, { useState, useContext } from "react";
import { LibroContext } from "../context/LibroContext";
import "../styles/styles.css";

export const Busqueda = ({ setLibrosFiltrados }) => {
    const [search, setSearch] = useState("");
    const { libros } = useContext(LibroContext);

    const searcher = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearch(searchTerm);
    };

    // Opciones para los menús desplegables
    const categorias = ["viaje a las estrellas", "No ficción", "Ciencia Ficción"];
    const anios = ["2020", "2021", "2022"];
    const editoriales = ["Editorial A", "Editorial B", "Editorial C"];


    const searchBooks = () => {
        const editorialSeleccionada = document.getElementById("categoria").value.toLowerCase();
        const anioSeleccionado = document.getElementById("anio").value.toString().toLowerCase();
        const categoriaSeleccionada = document.getElementById("categoria").value.toLowerCase();

        if (categoriaSeleccionada === "" && anioSeleccionado === "" && search === "") {
            setLibrosFiltrados(libros); // Devuelve todos los libros
        } else {
            const filteredLibros = libros.filter((dato) => {
                return (
                    (categoriaSeleccionada === "" || dato.category.toLowerCase().includes(categoriaSeleccionada.toLowerCase())) &&
                    (anioSeleccionado === "" || dato.publicationYear.toString() === anioSeleccionado.toString()) &&
                    (search === "" || dato.name.toLowerCase().includes(search.toLowerCase()))
                );
            });
            setLibrosFiltrados(filteredLibros);
        }
    }


    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col">
                    <label htmlFor="categoria"><b>Categoría</b></label>
                    <select className="form-select" id="categoria">
                        <option value="">Todas las categorías</option>
                        {categorias.map((categoria) => (
                            <option key={categoria} value={categoria}>
                                {categoria}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="anio"><b>Año</b></label>
                    <select className="form-select" id="anio">
                        <option value="">Todos los años</option>
                        {anios.map((anio) => (
                            <option key={anio} value={anio}>
                                {anio}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="editorial"><b>Editorial</b></label>
                    <select className="form-select" id="editorial">
                        <option value="">Todas las editoriales</option>
                        {editoriales.map((editorial) => (
                            <option key={editorial} value={editorial}>
                                {editorial}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="busqueda"><b>Título</b></label>
                    <input
                        className="form-control"
                        id="busqueda"
                        value={search}
                        type="text"
                        placeholder="Buscar"
                        onChange={searcher}
                    />
                </div>
                <div className="col">
                    <button className="btn btn-success" id="btnBuscar" onClick={searchBooks}>Buscar</button>
                </div>
            </div>
        </div>
    );
};

export default Busqueda;


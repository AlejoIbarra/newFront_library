import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LibroContext } from "../context/LibroContext";
import { AlquilerContext } from "../context/AlquilerContext";
import { LibroNotFound } from "../components/LibroNotFound";
import { useNavigate } from "react-router-dom";

import "../styles/styles.css";
import {Rocket} from "react-bootstrap-icons";

export const AlquilarLibro = () => {
  const { libroId } = useParams();
  const { libros } = useContext(LibroContext);
  const { agregarAlquiler } = useContext(AlquilerContext);
  const libro = libros.find((r) => r.id === libroId);
  const navigate = useNavigate();

  const [diasAlquiler, setDiasAlquiler] = useState("");


  const handleDiasAlquilerChange = (e) => {
    setDiasAlquiler(e.target.value);
  };

  const handleConfirmarClick = () => {
    if (diasAlquiler) {
      const nuevoAlquiler = {
        libroId: libro.id,
        libroName: libro.name,
        libroImage: libro.image,
        libroPrice: libro.price,
        diasAlquiler: parseInt(diasAlquiler*7)
      };
      agregarAlquiler(nuevoAlquiler);
      navigate("/carrito");
    } else {
      alert("Por favor, complete todos los campos antes de confirmar.");
      return;
    }
  };

  if (!libro) {
    return <LibroNotFound />;
  }

  return (
    <>
      <br />
      <div className="border border-gray rounded">
          <div className="m-3">
              {/*          <Link to={`/Libros/${libro.id}`} className="volver-button">
            Volver
          </Link>*/}
              <h2>Alquilar</h2>
              <p className="">
                  <strong> Libro a alquilar: </strong> {libro.name}
              </p>
              <label htmlFor="diasAlquiler">
                  <strong> Cuántos días se va alquilar:</strong>{" "}
              </label>
              <select
                  className="form-select"
                  name="diasAlquiler"
                  id="diasAlquiler"
                  value={diasAlquiler}
                  onChange={handleDiasAlquilerChange}
              >
                  <option value="">Selecciona</option>
                  <option value="1">1 Semana</option>
                  <option value="2">2 Semanas</option>
                  <option value="3">3 Semanas</option>
              </select>
              <br/>
              <button className="btn btn-outline-dark w-100" onClick={handleConfirmarClick}>Confirmar <Rocket/></button>
          </div>
          <div className="libro-details-image-container">
          </div>
      </div>
        <br/>
    </>
  );
};

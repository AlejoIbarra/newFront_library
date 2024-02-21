import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LibroContext } from "../context/LibroContext";
import { AlquilerContext } from "../context/AlquilerContext";
import { LibroNotFound } from "../components/LibroNotFound";
import { useNavigate } from "react-router-dom";
import "../styles/styles.css";
import {Reply} from "react-bootstrap-icons";


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
      <div className="libro-details-container">
        <div className="libro-details-content">
          <Link to={`/Libros/${libro.id}`} className="link-underline-opacity-0 ml-auto">
            Volver <Reply/>
          </Link>
          <h2>Alquilar</h2>
          <p className="">
            <strong> Libro a alquilar: </strong> {libro.name}
          </p>
          <label htmlFor="diasAlquiler">
            <strong> Cuantas semanas desea alquilar:</strong>{" "}
          </label>
          {/*          <input
            type="number"
            id="diasAlquiler"
            value={diasAlquiler}
            onChange={handleDiasAlquilerChange}
            min="1"
          />*/}

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
          <button className="btn btn-outline-dark w-100" onClick={handleConfirmarClick}>Confirmar</button>
        </div>
        <div className="libro-details-image-container">
          <img
              className="libro-details-image"
              src={libro.image}
              alt={libro.name}
          />
        </div>
      </div>
      <br/>
    </>
  );
};

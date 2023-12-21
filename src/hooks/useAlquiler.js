import React, { useState } from "react";

export const useAlquiler = () => {
  const [alquileres, setAlquileres] = useState([]);

  const agregarAlquiler = (nuevoAlquiler) => {
    var aux = [...alquileres, nuevoAlquiler];
    setAlquileres(aux);
  };

  const eliminarAlquiler = (index) => {
    var aux = [...alquileres];
    aux.splice(index, 1);
    setAlquileres(aux);
  };

  return { alquileres, agregarAlquiler, eliminarAlquiler };
};

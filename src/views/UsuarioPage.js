import React, { useContext } from 'react';
import { useUsuario } from "../hooks/useUsuario";
import { LinearProgress } from "@mui/material";
import { Usuario } from "../components/Usuario";

export const UsuarioPage = () => {
    const { usuarios } = useUsuario();

    return (
        <div className="main-page-container">
            <h2>Usuario</h2>
            <div className="libros-container">
                {
                    usuarios.length > 0 ? (
                        usuarios.map((usuario, index) => (
                            <Usuario
                                key={index}
                                name={usuario.name}
                                age={usuario.age}
                                deudas={usuario.deudas}
                            />
                        ))
                    ) : (
                        <LinearProgress color="secondary" />
                    )
                }
            </div>
        </div>
    );
}

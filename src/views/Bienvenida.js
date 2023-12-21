import React from 'react';
import { Link } from 'react-router-dom';
import useRedirection from '../hooks/useRedirection';
import '../styles/styles.css';

function Bienvenida() {
    useRedirection('/Libros', 3000);

    return (
        <div className="bienvenida-container">
            <Link to="/Libros" className="bienvenida-link">
                <div className="bienvenida-content">
                    <h1 className="bienvenida-heading">Bienvenidos a un nuevo mundo de lectura</h1>
                </div>
            </Link>
        </div>
    );
}

export default Bienvenida;

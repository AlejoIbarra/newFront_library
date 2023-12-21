import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Header} from "../components/Header";
import {MainPage} from "../views/MainPage";
import Bienvenida from "../views/Bienvenida";
import {LibroDetailsPage} from "../views/LibroDetailsPage";
import {AlquilerPage} from "../views/AlquilerPage"
import {CarritoLibrosPage} from "../views/CarritoLibrosPage"
import {UsuarioPage} from "../views/UsuarioPage";

export function GlobalRouter(){
   return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Bienvenida/>} />
                <Route path="/Libros" element={<Layout> <MainPage/> </Layout>} />
                <Route path="/libros/:libroId" element={<Layout> <LibroDetailsPage/> </Layout>} />
                <Route path="/alquilar/:libroId" element={<Layout> <AlquilerPage/> </Layout>} />
                <Route path="/carrito" element={<Layout> <CarritoLibrosPage/> </Layout>} />
                <Route path="/usuario" element={<Layout> <UsuarioPage/> </Layout>} />
            </Routes>
        </BrowserRouter>
   );
}

const Layout = ({children}) =>(
  <>
    <Header/>
    {children}
  </>

);
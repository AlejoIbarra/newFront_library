import React from "react";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer bg-black mt-auto">
            <p className="header-footer-text">© {currentYear} Librería Cosmos.</p>
        </footer>
    );

}
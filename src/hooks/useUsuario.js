import { useEffect, useState } from "react";

export const useUsuario = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([
                {
                    id: "1",
                    name: "Rubens Alarcón",
                    age: 22,
                    deudas: "Ninguna"
                }
            ]);
        }, 2500);
    }, []);

    return { usuarios };
};

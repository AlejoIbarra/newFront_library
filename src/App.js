import "./App.css";
import { useLibros } from "./hooks/useLibros";
import { LibroContext } from "./context/LibroContext";
import { AlquilerContext } from "./context/AlquilerContext";
import { Footer } from "./components/Footer";
import { GlobalRouter } from "./routes/GlobalRouter";
import { useAlquiler } from "./hooks/useAlquiler";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const libros = useLibros();
  const alquiler = useAlquiler();

  return (
    <AlquilerContext.Provider value={alquiler}>
      <LibroContext.Provider value={libros}>
        <GlobalRouter />
        <Footer />
      </LibroContext.Provider>
    </AlquilerContext.Provider>
  );
}

export default App;

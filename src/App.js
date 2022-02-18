import { ChakraProvider } from '@chakra-ui/react';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import Arriendos from './components/pages/arriendos/arriendos';
import Encuestas from './components/pages/encuestas/Encuestas';
import InformacionOficial from './components/pages/informacion/InformacionOficial';
import Inicio from './components/pages/inicio/Inicio';
import Header from './components/share/Header';

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <div className="App">
          <Routes>
            <Route exact path="/encuestas" element={<Encuestas />} />
            <Route exact path="/arriendos" element={<Arriendos />} />
            <Route exact path="/informacion-oficial" element={<InformacionOficial />} />
            <Route exact path="/inicio" element={<Inicio />} />
            <Route exact path="/" element={<Inicio />} />
          </Routes>
        </div>
      </HashRouter>
    </ChakraProvider>
  );
}

export default App;
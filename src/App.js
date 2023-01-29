import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import VendingMachine from "./VendingMachine";
import CatTreats from "./CatTreats";
import Tacos from "./Tacos";
import Chocolate from "./Chocolate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/cat-treats" element={<CatTreats />} />
          <Route path="/tacos" element={<Tacos />} />
          <Route path="/chocolate" element={<Chocolate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

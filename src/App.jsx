import "./App.css";
import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";

function App() {
  return (
    <main className="bg  md:h-auto ">
         <Routes>
         <Route path="/" element={<Inicio/>} />
        <Route path="https://incredible-alfajores-bd4b95.netlify.app/ " element={<Inicio/>} />  
      </Routes>
      
    </main>
  
  );
}

export default App;

import { Route,Routes } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Green from "./Green";
import Orange from "./Orange";
import Home from "./Home";


export default function Body() {
    return (
      <div id="main-section">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blue" element={<Blue/>} />
        <Route path="/red" element={<Red/>} />
        <Route path="/yellow" element={<Yellow/>} />
        <Route path="/green" element={<Green/>} />
        <Route path="/orange" element={<Orange/>} />
      </Routes>
    </div>
    );
  }
import "./App.css";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Navbar from "./Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profiles from "./Components/Profiles/Profiles";
import Technical from "./Components/Skills/Technical";
import Artistic from "./Components/Skills/Artistic";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Profiles" element={<Profiles />} />
          <Route path="/Technical" element={<Technical/>}/>
          <Route path="/Artistic" element={<Artistic/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

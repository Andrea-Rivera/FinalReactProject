import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Pages/home";
import About from "./components/Pages/about";
import Projects from "./components/Pages/projects";

import Footer from  "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/projects" element={<Projects />} exact />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

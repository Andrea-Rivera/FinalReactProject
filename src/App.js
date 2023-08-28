import { BrowserRouter, Switch, Route } from "react-router-dom";
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
        <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/projects">
      <Projects />
    </Route>
  </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

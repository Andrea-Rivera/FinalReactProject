import { Route, Switch } from "react-router-dom";
import React, { useContext } from "react";
import "./App.css";

import Navigation from "./components/navigation";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Footer from "./components/footer";
import { ThemeContext } from "./theme/ThemeProvider";
import FoodGallery from "./components/pages/foodGallery";
import Book from "./components/pages/book";
import TodoListPage from "./components/pages/todoList";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.darkMode;
  console.log(darkMode);
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path={`/projects/todo-app`}>
            <TodoListPage />
          </Route>
          <Route exact path={`/projects/food-gallery`}>
            <FoodGallery />
          </Route>
          <Route exact path={`/projects/books`}>
            <Book />
          </Route>
          <Route path="*">
            <h1>Oops! Sorry page not found!</h1>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;

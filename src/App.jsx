import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="icon-text">
            <i className="fa-solid fa-dumbbell"></i>
            <h1>FitFlicker</h1>
          </span>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu is-active">
          <div className="navbar-start">
            <a href="" className="navbar-item">
              Workouts
            </a>
            <a href="" className="navbar-item">
              Workouts
            </a>
          </div>
          <div className="navbar-end">

          </div>
        </div>
      </nav>
    </>
  );
}

export default App;

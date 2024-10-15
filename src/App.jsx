import { useEffect, useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  // useEffect(() => {
  //   const url = "https://v2.exercisedb.io/exercises?offset=0&limit=10"
  //   fetch(url)
  //   .then(response => response.json())
  //   console.log(response.json())
  // }, [])

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
            className="navbar-burger"
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
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-danger">
                  <span className="icon">
                    <i class="fa-solid fa-recycle"></i>
                  </span>
                  <span>Get a random exercise</span>
                </button>
                <a href="" className="button is-primary">
                  <span>Sign Up</span>
                </a>
                <a href="" className="button is-info">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <figure>
        <img src="https://bulma.io/assets/images/placeholders/256x256.png" />
        <img src="https://bulma.io/assets/images/placeholders/256x256.png" />
        <figcaption>Figure 1: Some beautiful placeholders</figcaption>
      </figure>
    </>
  );
}

export default App;

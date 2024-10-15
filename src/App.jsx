import { useEffect, useState } from "react";
import "./App.css";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  const [imageSrc, setImageSrc] = useState(
    "https://bulma.io/assets/images/placeholders/256x256.png"
  );

  function selectRandomExercise(exerciseData) {
    const randomIndex = Math.floor(Math.random() * exerciseData.length);
    return exerciseData[randomIndex];
  }

  const fetchGif = async () => {
    try {
      const response = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises?limit=0&offset=0",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
            "x-rapidapi-key":
              "74afa71158msh9ebed41333ad41bp1495b1jsn6219fbf3e639",
          },
        }
      );
      const data = await response.json();
      const exercise = selectRandomExercise(data);
      setImageSrc(exercise.gifUrl);
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    }
  };

  useEffect(() => {
    fetchGif();
  }, []);

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
                <button className="button is-danger" onClick={fetchGif}>
                  <span className="icon">
                    <i className="fa-solid fa-recycle" id="rand-btn"></i>
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
        <img src={imageSrc} alt="Random Exercise" />
      </figure>
    </>
  );
}

export default App;

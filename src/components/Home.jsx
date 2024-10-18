import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [imageSrc, setImageSrc] = useState("");

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
            "x-rapidapi-key": apiKey,
          },
        }
      );
      const data = await response.json();
      console.log(data);
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
    <div className="has-background-grey">
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="icon-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              width="40"
              height="40"
            >
              <path d="M96 64c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 160 0 64 0 160c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64-32 0c-17.7 0-32-14.3-32-32l0-64c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l32 0 0-64zm448 0l0 64 32 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 64c0 17.7-14.3 32-32 32l-32 0 0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-160 0-64 0-160c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32zM416 224l0 64-192 0 0-64 192 0z" />
            </svg>
            <span class="ml-2">FitFlicker</span>
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
                <Link to="/workout-list" className="button is-link">
                  <span>Workout List</span>
                </Link>
                <button className="button is-danger" onClick={fetchGif}>
                  <span className="icon">
                    <i className="fa-solid fa-recycle" id="rand-btn"></i>
                  </span>
                  <span>Get a random exercise</span>
                </button>
                <Link to="" className="button is-primary">
                  <span>Sign Up</span>
                </Link>
                <Link to="" className="button is-info">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <figure className="is-flex is-justify-content-center is-align-items-center">
        <img src={imageSrc} />
      </figure>
    </div>
  );
}

export default Home;

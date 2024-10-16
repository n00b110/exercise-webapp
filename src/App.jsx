import { Fragment, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import WorkoutList from "./components/WorkoutList"
import "bulma/css/bulma.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/workout_list" element={<WorkoutList/>} />
      </Routes>
    </Fragment>
  )
}

export default App;

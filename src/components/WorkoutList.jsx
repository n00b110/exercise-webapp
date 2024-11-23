import { useEffect, useState } from "react";

function WorkoutList() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [data, setData] = useState([]);

  function selectRandomExercise(exerciseData) {
    const randomIndex = Math.floor(Math.random() * exerciseData.length);
    return exerciseData[randomIndex];
  }

  const fetchExerciseInfo = async () => {
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
      const workouts = await response.json();
      setData(workouts)

    } catch (error) {
      console.error("Error fetching the GIF:", error);
    }
  };

  useEffect(() => {
    fetchExerciseInfo();
  }, [])

  return (

    <table>
      <thead>
        {Object.keys(data).map(header => {
          <tr>
            <th>{header}</th>
          </tr>
        })}
      </thead>
      <tbody>
      </tbody>
    </table>
  )
}
export default WorkoutList;

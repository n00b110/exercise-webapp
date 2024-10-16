import { useEffect } from "react";

function About() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [imageSrc, setImageSrc] = useState("");

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
      const data = await response.json();
      console.log(data);
      const exercise = selectRandomExercise(data);
      setImageSrc(exercise.gifUrl);
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    }
  };

  useEffect(() => {
    fetchExerciseInfo()
  }, []);
}

export default About;

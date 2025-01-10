import { useEffect, useState } from "react";

const JokeComponent = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setJoke(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching joke:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchJoke();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="col-xl-3 col-md-6 col-12"id="Joke">
      <div className="inner justify-center flex flex-col text-center">
        <h2 className="dark:bg-zinc-900 bg-neutral-700 w-max mx-auto p-1 rounded-md hover:scale-105 duration-500 text-slate-200 mt-16 dark:text-white">
          Joke
        </h2>
        <div className="max-w-sm p-6 hover:scale-105 duration-500 cursor-pointer mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {joke.setup}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {joke.punchline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JokeComponent;

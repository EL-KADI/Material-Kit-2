import { useEffect, useState } from "react";

const GamesComponent = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(
          "https://api.rawg.io/api/games?key=b14800e228af484aae907f1e61220c54"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching games:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="col-xl-3 col-md-6 col-12" id="Games">
      <div className="inner justify-center flex flex-col text-center">
        <h2 className="dark:bg-zinc-900 bg-neutral-700 w-max mx-auto p-1 rounded-md hover:scale-105 duration-500 text-slate-200 mt-16 dark:text-white">
          Games
        </h2>
        {games.map((game) => (
          <>
            <a
              className=" text-center mx-auto"
              href={`https://rawg.io/games/${game.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={game.id}
                className="max-w-sm p-6 hover:scale-105 duration-500 cursor-pointer mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
              >
                <a
                  href={`https://rawg.io/games/${game.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight w-52 text-gray-900 dark:text-white">
                    {game.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {game.description || "No description available."}
                </p>
                <a
                  href={`https://rawg.io/games/${game.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </a>
          </>
        ))}
      </div>
    </div>
  );
};

export default GamesComponent;

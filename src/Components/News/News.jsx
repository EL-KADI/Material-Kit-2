import { useEffect, useState } from "react";

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://api.currentsapi.services/v1/latest-news?apiKey=hLnJ54MIyydKPc9P1i2SUfmKBZEboK6AmQNENe9Dw5X2Z6jc"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setArticles(data.news);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="col-xl-3 col-md-6 col-12" id="News">
      <div className="inner justify-center flex flex-col text-center">
        <h2 className="dark:bg-zinc-900 bg-neutral-700 w-max mx-auto p-1 rounded-md hover:scale-105 duration-500 text-slate-200 mt-16 dark:text-white">
          News
        </h2>
        {articles.map((article) => (
          <div
            key={article.url}
            className="max-w-sm p-6 hover:scale-105 duration-500 cursor-pointer mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-5"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {article.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {article.description || "No description available."}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;

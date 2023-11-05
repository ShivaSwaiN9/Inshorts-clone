import React, { useEffect, useState } from "react";
import { useSearch } from '../utils/contextApi'


const Articles = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const { searchQuery } = useSearch(); 
  const apiKey = "8de921bdec6449b6bcfd9f5461284c6a";

  useEffect(() => {
    if (searchQuery) {
      const searchUrl = `https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-11-01&sortBy=popularity&apiKey=${apiKey}&page=${page}`;
      fetch(searchUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            if (page === 1) {
              setNews(data.articles);
            } else {
              setNews((prevNews) => [...prevNews, ...data.articles]);
            }
          } else {
            console.error("Failed to fetch search results");
          }
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&apiKey=${apiKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "ok") {
            if (page === 1) {
              setNews(data.articles);
            } else {
              setNews((prevNews) => [...prevNews, ...data.articles]);
            }
          } else {
            console.error("Failed to fetch news data");
          }
        })
        .catch((error) => {
          console.error("Error fetching news data:", error);
        });
    }
  }, [page, searchQuery]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      {news.map((article, index) => (
        <div
          key={index}
          className="bg-white border rounded-md shadow-md p-2 m-5 md:w-3/4 mx-auto flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/2">
            <img
              src={article.urlToImage}
              alt=""
              className="w-full h-64 object-cover rounded-t-md md:rounded-l-md"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h2 className="text-xl font-semibold mb-2 mt-0">
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className="text-gray-600 text-base mb-4">{article.description}</p>
            <div className="mt-auto">
              <a
                href={article.url}
                className="text-gray-500 text-xs hover:underline cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <button
          className="bg-white text-gray-800 py-2 px-4 rounded-md mt-4 shadow-md hover-bg-gray-200 transition duration-300 ease-in-out mb-8"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Articles;
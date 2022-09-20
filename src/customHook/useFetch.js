import { useState, useEffect } from "react";

export const BASE_API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movies, setMovies] = useState(null);
    const [isError, setIsError] = useState({ show: "false", message: "" });

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setIsLoading(false);
        setMovies(data.Search || data);
        setIsError({ show: "false", message: "" });
      } else {
        setIsError({ show: "true", message: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      getMovies(`${BASE_API_URL}&s=${apiParams}`);
    }, 400);
    return () => {
      clearTimeout(timerId);
    };
  }, [apiParams]);

  return { isLoading, isError, movies };
};

export default useFetch;
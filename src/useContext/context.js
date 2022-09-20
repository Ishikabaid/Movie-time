import React, { useContext, useState } from "react";
import useFetch from "../customHook/useFetch";

const MovieContext = React.createContext();

const MovieProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("avengers");
    const { isLoading, isError, movies } = useFetch(`&s=${searchQuery}`);

    return (
        <MovieContext.Provider value={{ isLoading, isError, movies, searchQuery, setSearchQuery }}>
            {children}
        </MovieContext.Provider>
    );
};

const useMovieContext = () => {
    return useContext(MovieContext);
}

export { useMovieContext, MovieContext, MovieProvider };
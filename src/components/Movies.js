import { NavLink } from "react-router-dom";
import { useMovieContext } from "../useContext/context";

const Movies = () => {
    const { movies, isLoading } = useMovieContext();

    if (isLoading) {
        return (
            <div className="loading">Loading...</div>
        );
    }

    return (
        <div className="container">
            <section className="movie-page">
                <div className="grid grid-4-col">
                    {movies ?
                        movies.map((currentMovie) => {
                            const { imdbID, Title, Poster } = currentMovie;
                            const movieName = Title.substring(0, 15);
                            return (
                                <NavLink to={`movie/${imdbID}`} key={imdbID}>
                                    <div className="card">
                                        <div className="card-info">
                                            <h2 className="movie-title">
                                                {movieName.length >= 15 ? `${movieName}...` : movieName}
                                            </h2>
                                            <img src={Poster} alt="movie-img" />
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                        : ""}
                </div>
            </section>
        </div>
    );
}

export default Movies;
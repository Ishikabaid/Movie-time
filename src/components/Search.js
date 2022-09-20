import { useMovieContext } from "../useContext/context";

const Search = () => {
  const { searchQuery, setSearchQuery, isError } = useMovieContext();


  return (
    <>
      <section className="search-section">
        <h1 className="logo">MOVIE TIME</h1>
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search your movie"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.message !== "Too many results." && isError.message}</p>
        </div>
      </section>
    </>
  );
};

export default Search;
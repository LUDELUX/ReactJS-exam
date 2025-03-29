import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // TODO: Замени с реален API
    setMovies([
      { id: 1, title: "Inception", year: 2010 },
      { id: 2, title: "Interstellar", year: 2014 },
      { id: 3, title: "The Dark Knight", year: 2008 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold mb-4">🎥 Movies Catalog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-xl font-bold">{movie.title}</h3>
            <p>{movie.year}</p>
            <Link
              to={`/movies/${movie.id}`}
              className="text-blue-400 hover:underline mt-2 block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

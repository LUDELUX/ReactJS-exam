import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // TODO: Замени с реален API
    const movies = [
      { id: 1, title: "Inception", year: 2010, description: "A mind-bending thriller" },
      { id: 2, title: "Interstellar", year: 2014, description: "A journey through space" },
      { id: 3, title: "The Dark Knight", year: 2008, description: "Batman vs. Joker" },
    ];
    const foundMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id]);

  if (!movie) return <p className="text-white">Movie not found</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h2 className="text-3xl font-bold">{movie.title}</h2>
      <p className="text-lg">{movie.year}</p>
      <p className="mt-4">{movie.description}</p>
    </div>
  );
};

export default MovieDetails;

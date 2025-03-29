import { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../api/moviesApi";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies();
      setMovies(data.filter(movie => movie.authorId === user.id));
    };
    fetchMovies();
  }, [user.id]);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div>
      <h1>My Movies</h1>
      <button onClick={() => navigate("/movies/add")} className="bg-green-500 text-white px-4 py-2 rounded">
  ➕ Add Movie
</button>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => navigate(`/movies/edit/${movie.id}`)}>✏️ Edit</button>
          <button onClick={() => handleDelete(movie.id)}>❌ Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;

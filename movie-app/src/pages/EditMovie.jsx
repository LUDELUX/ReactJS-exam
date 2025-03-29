import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMovieById, updateMovie } from "../api/moviesApi";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ title: "", description: "", image: "" });

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovieById(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!movie.title || !movie.description || !movie.image) {
      alert("All fields are required!");
      return;
    }

    await updateMovie(id, movie);
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h1>Edit Movie</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={movie.title} onChange={(e) => setMovie({ ...movie, title: e.target.value })} />
        <textarea value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} />
        <input type="text" value={movie.image} onChange={(e) => setMovie({ ...movie, image: e.target.value })} />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default EditMovie;

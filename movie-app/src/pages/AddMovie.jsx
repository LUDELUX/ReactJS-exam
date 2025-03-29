import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../api/moviesApi";
import { useAuth } from "../context/AuthContext";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title || !description || !image) {
      alert("All fields are required!");
      return;
    }

    const newMovie = { title, description, image, authorId: user.id };
    await createMovie(newMovie);

    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h1>Add a New Movie</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;

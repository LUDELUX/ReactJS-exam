import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
    return (
      <div className="bg-gray-800 text-white rounded-lg p-4 shadow-lg">
        <img className="rounded-md" src={movie.image} alt={movie.title} />
        <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
        <p className="text-sm">{movie.description.substring(0, 100)}...</p>
        <Link to={`/movies/${movie.id}`} className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded">View Details</Link>
      </div>
    );
  };

export default MovieCard;

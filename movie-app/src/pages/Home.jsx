import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🎬 Welcome to MovieApp</h1>
      <p className="mb-6">Explore a wide collection of movies!</p>
      <Link to="/movies" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
        View Movies
      </Link>
    </div>
  );
};

export default Home;

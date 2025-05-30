import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Blog App
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A simple blog application built with React and Zustand
      </p>
      <Link
        to="/blog"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
      >
        View Blog Posts
      </Link>
    </div>
  );
};

export default Home;

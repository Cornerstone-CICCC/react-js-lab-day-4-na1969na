import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div className="flex items-center py-4">
                  <Link to="/" className="text-xl font-bold text-gray-800">
                    Blog App
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <Link
                    to="/"
                    className="py-4 px-2 text-gray-500 hover:text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    to="/blog"
                    className="py-4 px-2 text-gray-500 hover:text-gray-900"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-6xl mx-auto mt-6 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blog/new" element={<AddPost />} />
            <Route path="/blog/edit/:id" element={<EditPost />} />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" />
    </Router>
  );
}

export default App;

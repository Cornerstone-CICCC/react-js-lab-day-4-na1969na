import { Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";

const BlogList = () => {
  const posts = usePostStore((state) => state.posts);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <Link
          to="/blog/new"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
        >
          Create New Post
        </Link>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{post.content}</p>
            <Link
              to={`/blog/${post.id}`}
              className="text-blue-500 hover:text-blue-600 font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

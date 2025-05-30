import { useParams, useNavigate, Link } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import toast from "react-hot-toast";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, deletePost } = usePostStore();
  const post = getPost(id || "");

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <Link
          to="/blog"
          className="text-blue-500 hover:text-blue-600 mt-4 inline-block"
        >
          ← Back to Blog List
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    deletePost(post.id);
    toast.success("Post deleted successfully");
    navigate("/blog");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <p className="text-gray-600 whitespace-pre-wrap mb-8">{post.content}</p>

        <div className="flex space-x-4">
          <Link
            to={`/blog/edit/${post.id}`}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Post
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete Post
          </button>
          <Link
            to="/blog"
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePostStore } from "../stores/post.store";
import toast from "react-hot-toast";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getPost, updatePost } = usePostStore();
  const post = getPost(id || "");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
        <button
          onClick={() => navigate("/blog")}
          className="text-blue-500 hover:text-blue-600 mt-4"
        >
          ← Back to Blog List
        </button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    updatePost(post.id, title, content);
    toast.success("Post updated successfully");
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post title"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post content"
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Update Post
          </button>
          <button
            type="button"
            onClick={() => navigate(`/blog/${post.id}`)}
            className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;

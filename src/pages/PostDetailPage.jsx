import { Link, useParams } from "react-router-dom";

export default function PostDetailPage({ posts, deletePost }) {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-600">Post no encontrado</h1>
      </div>
    );
  }

  return (
    <section className="max-w-3xl mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        {post.title}
      </h1>
      <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
      <p className="text-gray-500 text-sm mb-4">ID: {post.id}</p>

      <div className="flex gap-3">
        <button
          onClick={() => deletePost(post.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Delete Post
        </button>

        <Link
          to={`/edit/${post.id}`}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Post
        </Link>
      </div>
    </section>
  );
}

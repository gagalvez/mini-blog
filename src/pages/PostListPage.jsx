export default function PostListPage({ posts, deletePost }) {

  return (
    <section className="max-w-3xl mx-auto my-10 p-8 bg-white dark:bg-gray-100 rounded-2xl shadow-lg border border-gray-300">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Post list
      </h1>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition-shadow duration-200 bg-gray-50"
          >
            <h2 className="text-xl font-semibold text-blue-700 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{post.content}</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => deletePost(post.id)}>
              Delete Post
              </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function PostListPage({ posts }) {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de posts</h1>
      <ul className="space-y-3">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-2">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

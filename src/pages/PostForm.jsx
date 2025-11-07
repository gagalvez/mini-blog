import { useState } from "react";

export default function PostForm({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = { id: Date.now(), title, content };
    setPosts((prev) => [...prev, newPost]);
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <div>
        <label className="block mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label className="block mb-1">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}

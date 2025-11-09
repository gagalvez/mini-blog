import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const edit =!!id;
  const navigate = useNavigate();


 function handleSubmit(e) {
   e.preventDefault();

   if (edit) {
     const updatedPosts = posts.map((p) =>
       p.id === Number(id) ? { ...p, title, content } : p
     );
     setPosts(updatedPosts);
   } else {
     const newPost = { id: Date.now(), title, content };
     setPosts((prev) => [...prev, newPost]);
   }

   setTitle("");
   setContent("");
   navigate("/");
 }

  useEffect(() => {
    if (id) {
      const post = posts.find((p) => p.id === Number(id));
      if (post) {
        setTitle(post.title);
        setContent(post.content);
      }
    }
  }, [id, posts]);


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

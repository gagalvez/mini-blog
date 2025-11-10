import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import PostListPage from "./pages/PostListPage";
import PostForm from "./pages/PostForm";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  const [posts, setPosts] = useState(() => {
    const stored = localStorage.getItem("posts");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function deletePost(id) {
    setPosts(posts.filter((post) => post.id !== id));
  }


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PostListPage posts={posts} deletePost={deletePost} />}
        />
        <Route
          path="/create"
          element={<PostForm posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/post/:id"
          element={<PostDetailPage posts={posts} deletePost={deletePost} />}
        />
        <Route
          path="/edit/:id"
          element={<PostForm posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

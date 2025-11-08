import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import PostListPage from "./pages/PostListPage";
import PostForm from "./pages/PostForm";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  const [posts, setPosts] = useState([
  ]);

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
        <Route path="/create" element={<PostForm setPosts={setPosts} />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

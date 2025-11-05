import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/NavBar";
import PostListPage from "./pages/PostListPage";
import PostForm from "./pages/PostForm";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Primer post", content: "Contenido del primer post" },
    { id: 2, title: "Segundo post", content: "Contenido del segundo post" },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostListPage posts={posts} />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

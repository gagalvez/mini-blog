import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import PostListPage from "./pages/PostListPage";
import PostForm from "./pages/PostForm";
import PostDetailPage from "./pages/PostDetailPage";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
      <PostDetailPage />
    </BrowserRouter>
  );
}

export default App;

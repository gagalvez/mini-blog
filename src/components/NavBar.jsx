import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">Mini Blog</Link>
      </h1>

      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/create" className="hover:text-gray-200">
            Crear Post
          </Link>
        </li>
      </ul>
    </nav>
  );
}

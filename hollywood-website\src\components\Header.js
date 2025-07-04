import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-200 py-4">
      <nav className="container mx-auto p-4 flex justify-between">
        <Link to="/" className="text-lg font-bold">
          Hollywood
        </Link>
        <ul className="list-none flex justify-between">
          <li>
            <Link to="/movies" className="text-blue-600 hover:text-blue-900">
              Movies
            </Link>
          </li>
          <li>
            <Link to="/celebrities" className="text-blue-600 hover:text-blue-900">
              Celebrities
            </Link>
          </li>
          <li>
            <Link to="/news" className="text-blue-600 hover:text-blue-900">
              News
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
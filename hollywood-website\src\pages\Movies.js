import React from 'react';
import { Link } from 'react-router-dom';

function Movies() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Movies</h1>
      <ul className="list-none mb-6">
        <li>
          <Link to="/movies/1" className="text-blue-600 hover:text-blue-900">
            Movie 1
          </Link>
        </li>
        <li>
          <Link to="/movies/2" className="text-blue-600 hover:text-blue-900">
            Movie 2
          </Link>
        </li>
        <li>
          <Link to="/movies/3" className="text-blue-600 hover:text-blue-900">
            Movie 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Movies;
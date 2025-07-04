import React from 'react';
import { Link } from 'react-router-dom';

function Celebrities() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Celebrities</h1>
      <ul className="list-none mb-6">
        <li>
          <Link to="/celebrities/1" className="text-blue-600 hover:text-blue-900">
            Celebrity 1
          </Link>
        </li>
        <li>
          <Link to="/celebrities/2" className="text-blue-600 hover:text-blue-900">
            Celebrity 2
          </Link>
        </li>
        <li>
          <Link to="/celebrities/3" className="text-blue-600 hover:text-blue-900">
            Celebrity 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Celebrities;
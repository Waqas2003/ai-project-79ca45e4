import React from 'react';

function News() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <ul className="list-none mb-6">
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-900">
            News Article 1
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-900">
            News Article 2
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-900">
            News Article 3
          </a>
        </li>
      </ul>
    </div>
  );
}

export default News;
import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-3xl font-bold mb-4">Welcome to Hollywood!</h1>
      <p className="text-lg mb-6">Get the latest news, movies, and celebrity updates from the heart of Hollywood.</p>
      <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        Explore Now
      </button>
    </div>
  );
}

export default Home;
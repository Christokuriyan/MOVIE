import React, { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieInput, setMovieInput] = useState('');
  const [directorInput, setDirectorInput] = useState('');

  const addMovie = (e) => {
    e.preventDefault();
    if (movieInput.trim() && directorInput.trim()) {
      setMovies([...movies, { movie: movieInput, director: directorInput, id: Date.now() }]);
      setMovieInput('');
      setDirectorInput('');
    }
  };

  const removeMovie = (id) => {
    const newMovies = movies.filter(movie => movie.id !== id);
    setMovies(newMovies);
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="bg-gray-200 p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Movies and Directors</h1>
          <div className="mb-6">
            <form onSubmit={addMovie} className="space-y-4">
              <input
                type="text"
                value={movieInput}
                onChange={(e) => setMovieInput(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter movie name"
              />
              <input
                type="text"
                value={directorInput}
                onChange={(e) => setDirectorInput(e.target.value)}
                className="border rounded w-full py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter director name"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded w-full py-2 hover:bg-blue-600 focus:outline-none"
              >
                Add Movie
              </button>
            </form>
          </div>
          <ul className="space-y-2">
            {movies.map(movie => (
              <li key={movie.id} className="flex justify-between items-center bg-gray-100 rounded-lg p-3">
                <span className="text-lg text-gray-800">{movie.movie} - {movie.director}</span>
                <button
                  onClick={() => removeMovie(movie.id)}
                  className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 focus:outline-none"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './HomePage.css';

function HomePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!query.trim() || isLoading) return;
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${encodeURIComponent(query.trim())}`);
      if (!response.ok) throw new Error('Не удалось загрузить фильмы');
      const data = await response.json();
      if (data.Response === 'False') throw new Error(data.Error);
      setMovies(data.Search);
    } catch (error) {
      setError(error.message || 'Не удалось связаться с сервером');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="home-page">
      <div className="container home-page__inner">
        <SearchBar query={query} onQueryChange={setQuery} onSubmit={handleSubmit} isLoading={isLoading} />
        <section className="home-page__section">
          <h2 className="home-page__section-title">Результат поиска</h2>
          {isLoading ? <Loader /> : error ? <ErrorMessage message={error} /> : movies ? <MovieList movies={movies} /> : <p>Введите название фильма или сериала.</p>}
        </section>
      </div>
    </main>
  );
}

export default HomePage;

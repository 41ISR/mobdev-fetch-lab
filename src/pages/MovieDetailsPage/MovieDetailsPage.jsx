import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import './MovieDetailsPage.css';

function MovieDetailsPage() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const load = async () => {
      setError(null);
      setIsLoading(true);
      setMovie(null);
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&i=${encodeURIComponent(imdbID)}&plot=full`, { signal: controller.signal });
        if (!response.ok) throw new Error('Не удалось загрузить фильм');
        const data = await response.json();
        if (data.Response === 'False') throw new Error(data.Error);
        setMovie(data);
      } catch (error) {
        if (!controller.signal.aborted) setError(error.message || 'Не удалось связаться с сервером');
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };
    load();
    return () => controller.abort();
  }, [imdbID]);

  return (
    <main className="movie-details-page">
      <div className="container">
        {isLoading ? <Loader /> : error ? <><Link to="/">← Ко всем фильмам</Link><ErrorMessage message={error} /></> : movie && <MovieDetails movie={movie} />}
      </div>
    </main>
  );
}

export default MovieDetailsPage;

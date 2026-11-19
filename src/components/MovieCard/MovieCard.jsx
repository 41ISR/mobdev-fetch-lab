import { Link } from 'react-router-dom';
import LikeButton from '../LikeButton/LikeButton';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <Link to={`/movie/${movie.imdbID}`} className="movie-card__poster-button" aria-label={`Открыть страницу фильма «${movie.Title}»`}>
        {movie.Poster && movie.Poster !== 'N/A' ? (
          <img className="movie-card__poster" src={movie.Poster} alt={movie.Title} />
        ) : <div className="movie-card__poster movie-card__poster--placeholder">Постер отсутствует</div>}
        <span className="movie-card__type">{({ movie: 'Фильм', series: 'Сериал', episode: 'Эпизод' })[movie.Type] || movie.Type}</span>
      </Link>

      <div className="movie-card__like">
        <LikeButton />
      </div>

      <div className="movie-card__info">
        <h3 className="movie-card__title" title={movie.Title}>{movie.Title}</h3>
        <p className="movie-card__year">{movie.Year}</p>
      </div>
    </article>
  );
}

export default MovieCard;

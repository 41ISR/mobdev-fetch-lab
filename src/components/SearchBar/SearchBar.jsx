import './SearchBar.css';

function SearchBar({ query, onQueryChange, onSubmit, isLoading }) {
  return (
    <form className="search-bar" onSubmit={onSubmit}>
      <span className="search-bar__eyebrow">Найти фильм или сериал</span>
      <div className="search-bar__row">
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          aria-label="Название фильма или сериала"
          type="text"
          className="search-bar__input"
          placeholder="Например: Joker, Interstellar, Dune…"
        />
        <button type="submit" disabled={isLoading} className="search-bar__button">Искать</button>
      </div>
    </form>
  );
}

export default SearchBar;

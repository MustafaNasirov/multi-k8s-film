import "./MovieCard.css";

const MovieCard = ({ id, title, poster_path }) => { 
  return (
    <div className="movie__card" key={id}>
      <p className="movie__title">{title}</p>
      <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
    </div> 
  );
}

export default MovieCard;

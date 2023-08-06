import "./MovieCard.css";

const MovieCard = ({ key, name, poster_path }) => { // instead of ({ id, title, poster_path })
  return (
    <div className="movie__card" key={key}>
      <p className="movie__title">{name}</p>
      <img className="movie__poster" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
    </div> 
  );
}



export default MovieCard;

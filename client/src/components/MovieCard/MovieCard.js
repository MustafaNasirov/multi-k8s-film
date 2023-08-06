import "./MovieCard.css";

const MovieCard = ({ key, name, poster }) => { // instead of ({ id, title, poster_path })
  return (
    <div className="movie__card" key={key}>
      <p className="movie__title">{name}</p>
      <img className="movie__poster" src={poster} alt="poster" />
    </div> 
  );
}



export default MovieCard;

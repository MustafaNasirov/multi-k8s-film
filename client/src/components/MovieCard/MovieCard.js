import "./MovieCard.scss"

  const MovieCard = ({id, title, poster}) => {
    
    return (
      
              <div className="movie__card" key={id}>
                  <p className="movie__title">{title}</p>
                  <img className="movie__poster" src={poster} alt="poster" />
              </div> 
      )
    }


export default MovieCard;

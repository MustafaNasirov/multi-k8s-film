  const MovieCard = ({id, title, poster}) => {
    
    return (
      
              <div key={id} className="movie__card">
                  <p className="movie__title">{title}</p>
                  <img className="movie__poster" src={poster} alt="poster" />
              </div> 
      
      )
    }


export default MovieCard;

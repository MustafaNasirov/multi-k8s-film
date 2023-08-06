import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({movieArr}) =>{

    const movies = movieArr.map((movie) => {
    return(
        <div className='movie__card'>
            <MovieCard
                key={movie.id}
                name={movie.title}
                poster={movie.poster_path}
            />
        </div>
        )
    })
    
    return <div className='movie__container'>{movies}</div>
}

export default MovieList;
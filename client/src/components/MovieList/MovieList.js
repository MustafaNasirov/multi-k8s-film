import MovieCard from "../MovieCard/MovieCard"
import "./MovieCard.scss"

const MovieList = ({movieArr}) =>{

    const movies = movieArr.map((movie) => {
    return(
        <div className='movie__card'>
            <MovieCard
                key={movie.id}
                name={movie.title}
                img={movie.poster}
            />
        </div>
        )
    })
    
    return <div className='movie__container'>{movies}</div>
}

export default MovieList;
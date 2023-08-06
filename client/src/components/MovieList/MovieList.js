import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movieArr }) => { // Use movieArr instead of movies

    const movies = movieArr.map((movie) => {
        return (
            <div key={movie.id} className='movie__card'>
                <MovieCard
                    name={movie.title}
                    poster={movie.poster_path}
                />
            </div>
        )
    });

    return <div className='movie__container'>{movies}</div>;
}

export default MovieList;
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movieArr }) => { 

    const movies = movieArr.map((movie) => {
        return (
            <div  className='movie__item' key={movie.id}>
                <MovieCard
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            </div>
        );
    });

    return <div className='movie__container'>{movies}</div>;
}

export default MovieList;
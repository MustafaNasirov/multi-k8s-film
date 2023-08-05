import MovieList from "../../components/MovieList/MovieList";
import "./Main.scss"

const Main = ({movies}) => {
   
    return(
        <div className="movie__container">
            <MovieList movieArr={movies}/>
        </div>
    )

}

export default Main;
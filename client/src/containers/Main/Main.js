import MovieList from "../../components/MovieList/MovieList";
import "./Main.css";

const Main = ({ movieArr }) => { 
    console.log('movies in Main:', movieArr);
    
    return (
      <div className="movie__container">
        <MovieList movieArr={movieArr} />
      </div>
    );
  }
  

export default Main;
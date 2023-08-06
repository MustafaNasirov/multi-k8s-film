import MovieList from "../../components/MovieList/MovieList";
import "./Main.css";

const Main = ({ movieArr }) => { 

    return (
      <div className="main__container">
        <MovieList movieArr={movieArr} />
      </div>
    );
  }
  

export default Main;
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Fib from './Fib';
import Main from './containers/Main/Main';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Function to fetch movie data from the API
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWFmOGM3MzhiYzFlNDhjZjZiMDZiNmYxZWY0ZjAyOCIsInN1YiI6IjY0Y2FlNGQ0NGZkMTQxMDBiMGYyYTgyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QACsgE90H0Q7HBxy4WJj3vJhowlW7p8RoMiWZz1jEt4'
          }
        };

        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          options
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);



  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className='App-title'>K8s Movie Database</h1>
          <img src={logo} className="App-logo" alt="logo" />
          
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={OtherPage} />
        </div>

        {movies && <Main className='main' movieArr={movies} /> }
        
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import axios from 'axios';

import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  console.log(movieList)

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          //console.log(response.data);
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      <Route path="/" render={() => <MovieList movies={movieList} />} />
    </div>
  );
};

export default App;

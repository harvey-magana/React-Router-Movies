import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from '../App';
import MovieList from './MovieList';

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
      <Link to="/">
        <div className="home-button">Home</div>
      </Link>
  </div>
);

export default SavedList;

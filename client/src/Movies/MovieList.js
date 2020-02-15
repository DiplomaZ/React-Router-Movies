import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails {...props} key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

function MovieDetails(props) {
  const { title, director, metascore, stars, id } = props.movie;

  function goToDetails() {
    console.log("you clicked it");
    props.history.push(`/movies/${id}`);
    //we could have also put this in an anonymous function.... this just looks cleaner to me
  }

  console.log(props);
  return (
    <div onClick={goToDetails}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;

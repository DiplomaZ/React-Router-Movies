import React, { useState, useEffect } from "react";
import axios from "axios";

const Movie = props => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    console.log("WE SETTIN ", props);
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook
    setMovie(props.movies[id]); //set it to the incoming associated array index being th eID
  }, [props.movies]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    console.log("Never should have come here");
    props.setBlankRefresher(true);
    return <div>Loading movie information...</div>;
  }
  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
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
      <div className="save-button">Save</div>
    </div>
  );
};

export default Movie;

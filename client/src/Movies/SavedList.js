import React from "react";
import { Link } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <div
      onClick={() => {
        props.history.push("/");
      }}
    >
      <div className="home-button">home</div>
    </div>
  </div>
);

export default SavedList;

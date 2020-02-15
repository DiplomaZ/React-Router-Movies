import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [blankRefresher, setBlankRefresher] = useState(false);

  // const addToSavedList = movie => {
  //   setSavedList([...savedList, movie]);
  // };

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then(response => {
          console.log("our response is ", response.data);
          setMovies(response.data);
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getMovies();
  }, []);

  return (
    <div>
      <Route
        path="/"
        render={props => {
          return <SavedList {...props} list={savedList} />;
        }}
      />
      <Route
        exact
        path="/"
        render={props => {
          return <MovieList {...props} movies={movies}></MovieList>;
        }}
      />
      <Route
        path="/movies/:id"
        render={props => {
          console.log(props);
          return (
            <Movie
              {...props}
              movies={movies}
              setBlankRefresher={setBlankRefresher}
            ></Movie>
          );
        }}
      />
    </div>
  );
};

export default App;

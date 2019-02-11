import { 
  ADD_MOVIE,
  DELETE_MOVIE, 
  UPDATE_MOVIE_CATEGORY,
  UPDATE_MOVIE_LIST,
  FETCHING_MOVIE_LIST,
  MOVIE_LIST_FETCHED
} from "./actionTypes";

import OMDB from '../lib/OMDB';

export const addMovie = movie => ({
  type: ADD_MOVIE,
  payload: {
    movie
  }
});

export const deleteMovie = movie => ({
  type: DELETE_MOVIE,
  payload: {movie}
});

export const updateMovieCategory = (movie,category) => ({
  type: UPDATE_MOVIE_CATEGORY,
  payload: { movie ,category}
});

export const updateMovieList = movies => ({
  type: UPDATE_MOVIE_LIST,
  payload: {movies}
});

export const fetchMovieList = search => {
  return(dispatch,getState) => {
    dispatch({type: FETCHING_MOVIE_LIST});
    console.log("Fetching movie")
    return OMDB.movies(search).then(json=>{
      dispatch(updateMovieList(json));
    }).catch((resp) => {
      console.error(resp);
      dispatch({type: MOVIE_LIST_FETCHED});
    })
  }
}

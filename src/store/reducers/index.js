import { combineReducers } from "redux";
import OMDBMovies from "./OMDBMovies"
import myMovies from "./myMovies"

export default combineReducers({ OMDBMovies, myMovies });

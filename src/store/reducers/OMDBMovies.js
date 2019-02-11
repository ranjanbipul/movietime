import { UPDATE_MOVIE_LIST, FETCHING_MOVIE_LIST, MOVIE_LIST_FETCHED } from "../actionTypes";
import {arrayToObject} from "../../lib/utility"

const initialState = {
  allIds: [],
  byIds: {},
  updating: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVIE_LIST: {
      const { movies } = action.payload;
      let movieList = arrayToObject(movies,"imdbID");
      return {
        ...state,
        allIds: Object.keys(movieList),
        byIds: movieList,
        updating: false
      };
    }
    case FETCHING_MOVIE_LIST:{
      return {...state,updating:true};
    }
    case MOVIE_LIST_FETCHED: {
      return {...state,updating:false}
    }
    default:
      return state;
  }
}

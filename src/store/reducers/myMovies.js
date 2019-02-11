import { ADD_MOVIE, DELETE_MOVIE, UPDATE_MOVIE_CATEGORY } from "../actionTypes";
import {CATEGORIES} from "../../constants";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_MOVIE: {
      const { movie } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, movie.imdbID],
        byIds: {
          ...state.byIds,
          [movie.imdbID]: {...movie,category: CATEGORIES.ALL}
        }
      };
    }
    case DELETE_MOVIE: {
        const { movie } = action.payload;
        let newAllIds = [...state.allIds];
        let newByIds = {...state.byIds};
        newAllIds = newAllIds.filter(item => item!==movie.imdbID);
        delete newByIds[movie.imdbID];
        return {
          ...state,
          byIds: newByIds,
          allIds: newAllIds
        }
    }
    
    case UPDATE_MOVIE_CATEGORY: {
      const { movie,category } = action.payload;
      let newAllIds = [...state.allIds];
      if(state.byIds[movie.imdbID]===undefined){
          newAllIds = [...state.allIds,movie.imdbID];
      }
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [movie.imdbID]: {
            ...movie,
            category: category
          }
        },
        allIds: newAllIds
      };
    }
    default:
      return state;
  }
}

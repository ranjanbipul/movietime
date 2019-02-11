import React from 'react';
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { updateMovieCategory,deleteMovie } from '../store/actions'
import Category from '../components/Category'

const getMovieListByCategory = (movies, category) => {
      return Object.values(movies.byIds).filter(movie => movie.category===category)
}

const mapStateToProps = state => ({
  movies: state.myMovies
})

const mapDispatchToProps = dispatch => bindActionCreators({updateMovieCategory,deleteMovie},dispatch)

function CategoryMovieList(props){
  const movies = getMovieListByCategory(props.movies,props.category);
  return <Category {...props} movies={movies} category={props.category} />;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryMovieList);

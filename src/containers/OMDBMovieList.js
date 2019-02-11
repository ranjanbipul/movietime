import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { updateMovieCategory,deleteMovie } from '../store/actions'
import Category from '../components/Category'

const getOMDBMovieList = (state) => {
    return Object.values(state.OMDBMovies.byIds).filter(movie=>state.myMovies.allIds.indexOf(movie.imdbID)===-1);
}

const mapStateToProps = state => ({
  movies: getOMDBMovieList(state),
  category: "All"
})

const mapDispatchToProps = dispatch => bindActionCreators({updateMovieCategory,deleteMovie},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);

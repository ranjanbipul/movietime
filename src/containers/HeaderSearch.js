import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import { fetchMovieList} from '../store/actions'
import Header from '../components/Header'

const mapStateToProps = state => ({
    searching: state.OMDBMovies.updating
})

const mapDispatchToProps = dispatch => bindActionCreators({fetchMovieList},dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

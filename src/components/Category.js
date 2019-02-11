import React from 'react';
import PropTypes from 'prop-types';

import { DropTarget } from 'react-dnd';

import { withStyles } from '@material-ui/core/styles';
import Movie from './Movie';

const categoryTarget = {
  drop(props, monitor) {
    if(props.category==="All"){
      props.deleteMovie(monitor.getItem().movie);
    }else{
      props.updateMovieCategory(monitor.getItem().movie,props.category);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

function Category(props) {
  const { classes,movies,category,connectDropTarget } = props;

  return connectDropTarget(
    <div className={classes.root}>
      <div className={classes.heading}>
        {category}
      </div>
      <div className={classes.gridList}>
        {movies.length? 
          movies.map(movie => (<Movie key={movie.Title} movie={movie} />)) : 
          <small style={{color:"gray"}}>Nothing here. Browse movies by searching above. <br/><br/>
            To add movie to this list, drag and drop.</small>
        }
      </div>
    </div>
  );
}

Category.propTypes = {
  classes: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  updateMovieCategory: PropTypes.func.isRequired
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #3f51b5",
    margin: 3,
    padding: 3,
    width: "19%"
  },
  heading: {
    display: 'flex',
    alignItems: 'center',
    minHeight: 64
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    width: "100%",
    height: 500,
    overflowY: 'scroll'
  }
});

export default withStyles(styles)(DropTarget("MOVIE", categoryTarget, collect)(Category));
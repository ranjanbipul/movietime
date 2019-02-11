import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { DragSource } from 'react-dnd';

const cardSource = {
  beginDrag(props) {
    return {
      movie: props.movie
    };
  }
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const styles = theme => ({
  card: {
      borderRadius: 4,
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px",
      boxSizing: "border-box",
      width: "45%",
      margin: 4
  }
});

function Movie(props) {
  const { classes,movie,connectDragSource } = props;

  return  connectDragSource(
    <div className={classes.card} >
      <img src={movie.Poster} alt={movie.Title} style={{width: "100%",height:"100%"}}/>
    </div>
  );
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  movie: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(DragSource("MOVIE", cardSource, collect)(Movie));
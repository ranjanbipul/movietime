import React, { Component } from 'react';

// React Drag and Drop import
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// App Component import
import HeaderSearch from './containers/HeaderSearch';
import CategoryMovieList from './containers/CategoryMovieList';
import OMDBMovieList from './containers/OMDBMovieList';


import {CATEGORIES} from './constants';
import './App.css';

class App extends Component {
  render() {
    const categoryList = Object.values(CATEGORIES)
            .map((category) => <CategoryMovieList key={category} category={category} />)
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <HeaderSearch />
          <div className="Main">
            <OMDBMovieList key="All" category="All" />
            {categoryList}
          </div>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;

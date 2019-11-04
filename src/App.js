import React from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  getInitialState: function () {
    return { searchTerm: "", searchUrl: "" };
  },
  handleKeyUp: function (e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = 
      this.setState({ searchUrl: searchUrl });
    }
  }
}
)

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
  getInitialState: function () {
    return { searchTerm: "", searchUrl: "" };
  },
  handleKeyUp: function (e) {
    if (e.key === 'Enter' && this.state.searchTerm !== '') {
      var searchUrl = //full url with query + searchTerm + APIkey
        this.setState({ searchUrl: searchUrl });
    }
  }
}
);

var TitleList = React.createClass({
  apiKey: //api key here,
    
  getInitialState: function() {
    return { data: [], mounted: false };
  },

  loadContent: function () {
    var requestUrl = //moviedbapi url + this.props.url+ '&api_key=' +APIkey;
      fetch(requestUrl).then((response) => {
        return response.json();
      }).then((data) => {
        this.setState({ data: data });
      }).catch((err) => {
        console.log("Error Caught");
      });
  
  },


  componentDidMount: function () {
    if (this.props.orl !== '') {
      this.loadContent();
      this.setState({mounted:true})
    }
  },
})

export default App;

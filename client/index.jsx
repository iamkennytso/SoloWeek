import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {
    this.setState(
      {

      }
    )
  }

  render () {
    return (
        <div>
          <img src="imgs/indexBackground.jpg" alt="Gotta Search them All"></img>
          <br></br>
          <br></br>
          <form id="searchForm" onSubmit = { (e) => {
            e.preventDefault();
            let input = document.getElementById("searchTerm").value;
            console.log(input);
          }}>
            <img src="imgs/pokeSearch.jpg" alt="Search"></img>
            <input type="text" id="searchTerm" defaultValue="Search for a pokemon!" ></input>
            <button type="submit" id='searchIcon'></button>
          </form>
        </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'));
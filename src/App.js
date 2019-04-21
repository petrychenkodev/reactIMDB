import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      movies: []
    };
  }

  inputChange = e => {
    this.setState({ searchInput: e.target.value });
    if (e.target.value.length > 2) {
      this.getDataFetchSearch(e.target.value);
    }
  };
  componentDidMount() {
    this.getDataFetchSearch("hannibal");
  }

  getDataFetchSearch = query => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7335d426d0b5ae6355bd5040b78cccd0&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({ movies: data.results });
      });
  };

  render() {
    return (
      <>
        <div className="ui container segment azu">
          <div className="ui form">
            <div className="field">
              <input
                onChange={this.inputChange}
                type="text"
                name="first-name"
                placeholder="Search your film starts here"
                value={this.state.searchInput}
              />
            </div>
          </div>
        </div>
        <div className="flex container">
          <Movie mo={this.state.movies} />
        </div>
      </>
    );
  }
}

export default App;

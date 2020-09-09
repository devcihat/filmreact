import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie.js";
import $ from "jquery";
import view from "./view.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.performSearch("pokemon");
  }

  performSearch(searchTerm) {
    console.log("Perform search using moviedb");
    const urlString =
      "http://www.omdbapi.com/?i=tt3896198&apikey=c18432a8&s=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully");
        console.log(searchResults);

        const results = searchResults.Search;
        console.log(results);

        var movieRows = [];
        if (results) {
          results.forEach((movie) => {
            // movie.poster_src = movie.Poster;
            // console.log(movie.poster_path)
            const movieRow = <Movie key={movie.id} movie={movie} />;
            movieRows.push(movieRow);
          });
        }

        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      },
    });
  }

  searchChangeHandler(event) {
    console.log(event.target.value);
    const boundObject = this;
    const searchTerm = event.target.value;
    this.performSearch(searchTerm);
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td width="8" />
              <td>
                <h1>Case Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "99%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
          }}
          onChange={this.searchChangeHandler.bind(this)}
          placeholder="Enter search term"
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App;

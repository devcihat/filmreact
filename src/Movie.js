import React from "react";

class MovieRow extends React.Component {
  viewMovie() {
    // console.log("Trying to view movie")
    // console.log(this.props.movie.title)
    const { imdbID } = this.props.movie;
    const url = `http://www.omdbapi.com/?i=${this.props.movie.imdbID}&apikey=c18432a8`;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.Poster} />
            </td>
            <td>
              <h3>{this.props.movie.title}</h3>
              <p>{this.props.movie.overview}</p>
              <input
                type="button"
                onClick={this.viewMovie.bind(this)}
                value="View"
              />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;

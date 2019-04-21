import React, { Component } from "react";

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {this.props.mo.map(movie => {
          return (
            <div className="ui card" key={movie.id}>
              <div className="image">
                <img
                  src={
                    !movie.poster_path
                      ? "https://via.placeholder.com/290x435"
                      : "https://image.tmdb.org/t/p/w300_and_h450_bestv2" +
                        movie.poster_path
                  }
                />
              </div>
              <div className="content">
                <a className="header">{movie.original_title}</a>
                <div className="meta">
                  <span className="date">
                    Released date {movie.release_date}
                  </span>
                </div>
                <div className="description">
                  {movie.overview.slice(0, 185)}...
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon" />
                  {movie.vote_count}
                </a>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

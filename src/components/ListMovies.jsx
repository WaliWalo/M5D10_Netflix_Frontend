import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  getAllMovies,
  getMoviesByImdbId,
  getMoviesByTitle,
} from "../api/mediaApi";
import SingleMovie from "./SingleMovie";
import WarningSign from "./WarningSign";

export default class ListMovies extends Component {
  state = {
    harrypoter: [],
    superman: [],
    batman: [],
    searchQuery: [],
    emptyQuery: [],
    loading: true,
    movies: [],
  };

  myfetch = async (query) => {
    this.setState({ loading: true });
    try {
      let response;
      if (this.props.path === "/tvShow") {
        response = await fetch(
          `http://www.omdbapi.com/?apikey=ab86940&s=${query}&y=${this.props.year}&type=${this.props.type}`
        );
      } else {
        response = await fetch(
          `http://www.omdbapi.com/?apikey=ab86940&s=${query}`
        );
      }

      let arraymovies = await response.json();
      let movies = arraymovies.Search;
      if (query === "harry") {
        this.setState({ harrypoter: movies.slice(0, 6), loading: false });
      } else if (query === "superman") {
        this.setState({ superman: movies.slice(0, 6), loading: false });
      } else if (query === "batman") {
        this.setState({ batman: movies.slice(0, 6), loading: false });
      } else if (movies) {
        this.setState({ searchQuery: movies, loading: false });
      } else {
        this.setState({ searchQuery: this.state.emptyQuery, loading: false });
      }
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };

  fetchAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({ movies });
  };

  fetchMoviesByImdbId = async (imdbId) => {
    const movies = await getMoviesByImdbId(imdbId);
  };

  fetchMoviesByTitle = async (query) => {
    let movies = await getMoviesByTitle(query);
    if (movies === undefined) {
      movies = [];
    }
    this.setState({ searchQuery: movies.Search, loading: false });
  };

  componentDidMount = async () => {
    //await this.myfetch("harry");
    await this.myfetch("superman");
    await this.myfetch("batman");
    await this.fetchAllMovies();
  };
  async componentDidUpdate(prevProp) {
    // Typical usage (don't forget to compare props):
    if (
      this.props.query !== prevProp.query ||
      this.props.year !== prevProp.year ||
      this.props.type !== prevProp.type
    ) {
      this.fetchMoviesByTitle(this.props.query);
    }
  }
  render() {
    return (
      <div>
        <Container className="p-0">
          <h3>{this.state.loading ? "Loading..." : this.props.query}</h3>
          {this.state.searchQuery === undefined &&
          this.props.query.length > 0 ? (
            <WarningSign query={this.props.query} />
          ) : (
            <Row style={{ marginBottom: "20px" }}>
              {this.state.searchQuery.map((movie) => (
                <Col
                  xs={6}
                  md={3}
                  lg={2}
                  key={`movieId${movie.Poster}`}
                  className="mb-5 px-1"
                >
                  <SingleMovie
                    obj={movie}
                    history={this.props.history}
                  ></SingleMovie>
                </Col>
              ))}
            </Row>
          )}

          <>
            <h3>{this.state.loading ? "Loading..." : "Trending now"}</h3>
            {this.state.movies && (
              <Row style={{ marginBottom: "20px" }}>
                {this.state.movies.map((movie) => (
                  <Col
                    xs={6}
                    md={3}
                    lg={2}
                    key={`${movie.imdbID}`}
                    className="mb-5 px-1"
                  >
                    <SingleMovie
                      obj={movie}
                      history={this.props.history}
                    ></SingleMovie>
                  </Col>
                ))}
              </Row>
            )}
          </>
        </Container>
      </div>
    );
  }
}

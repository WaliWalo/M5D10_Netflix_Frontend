import React, { Component } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import Comment from "./Comment";

export default class ShowDetail extends Component {
  state = {
    movie: null,
    loading: false,
  };

  componentDidMount() {
    let movieIdFromTheUrl = this.props.match.params.id;
    this.fetchMovie(movieIdFromTheUrl);
  }

  fetchMovie = async (query) => {
    this.setState({ loading: true });
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=ab86940&i=${query}`
      );

      let movie = await response.json();

      this.setState({ movie: movie, loading: false });
    } catch (e) {
      console.log(e);
      this.setState({ loading: false });
    }
  };
  render() {
    return (
      <Container>
        <h1 style={{ color: "white" }}>{this.props.title}</h1>
        {this.state.movie && (
          <div>
            <Row className="my-2">
              <Col md={3}>
                <img
                  src={this.state.movie.Poster}
                  alt="movie"
                  className="img-fluid"
                />
              </Col>
              <Col md={9}>
                <Card>
                  <Card.Body>
                    <Card.Title>{this.state.movie.Title}</Card.Title>
                    <Card.Subtitle>
                      <Badge variant="danger">{this.state.movie.Genre}</Badge>
                    </Card.Subtitle>
                    <Card.Text>{this.state.movie.Plot}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Comment movieid={this.state.movie.imdbID} />
          </div>
        )}
        {!this.state.movie && <h1>LOADING</h1>}
      </Container>
    );
  }
}

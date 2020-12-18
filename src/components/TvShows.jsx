import React, { Component } from "react";
import { FormControl, InputGroup, Form } from "react-bootstrap";
import ListMovies from "./ListMovies";

export default class TvShows extends Component {
  state = {
    query: "",
    loading: true,
    type: "",
    year: "",
  };

  handleSearch = (queryInp) => {
    this.setState({ query: queryInp.toLowerCase() });
  };

  handleType = (queryInp) => {
    this.setState({ type: queryInp.toLowerCase() });
  };

  handleYear = (queryInp) => {
    this.setState({ year: queryInp.toString() });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>{this.props.title}</h1>
        <InputGroup>
          <FormControl
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            className="inpu"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
          <Form.Control
            as="select"
            id="type"
            onChange={(e) => this.handleType(e.target.value)}
          >
            <option>Movie</option>
            <option>Series</option>
            <option>Episode</option>
          </Form.Control>
          <Form.Control
            type="number"
            placeholder="2005"
            min="0"
            id="year"
            onChange={(e) => this.handleYear(e.target.value)}
          />
        </InputGroup>
        <ListMovies
          query={this.state.query}
          path={this.props.location.pathname}
          history={this.props.history}
          type={this.state.type}
          year={this.state.year}
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import MyModal from "./MyModal";
import "./SingleMovie.css";

export default class SingleMovie extends Component {
  state = {
    modalShow: false,
  };
  render() {
    return (
      <>
        <img
          src={this.props.obj.Poster}
          className="img-fluid zoom"
          alt=""
          style={{ width: "11rem", height: "10rem" }}
          onClick={() => this.setState({ modalShow: true })}
          // onClick={() =>
          //   this.props.history.push("/details/" + this.props.obj.imdbID)
          // }
        />

        <MyModal
          movie={this.props.obj.imdbID}
          poster={this.props.obj.Poster}
          moviename={this.props.obj.Title}
          movieyear={this.props.obj.Year}
          movietype={this.props.obj.Type}
          show={this.state.modalShow}
          onHide={() => this.setState({ modalShow: false })}
        />
      </>
    );
  }
}

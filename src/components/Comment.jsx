import React, { Component } from "react";
import AddComment from "./AddComment";
import { ListGroup, Button, FormControl, Badge } from "react-bootstrap";

export default class Comment extends Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      comments: [],
      loading: false,
      allComment: [], //allComment for search function to return to all comment after removing query
      modified: false,
    };
  }

  componentDidMount = async () => {
    try {
      this.fetchData();
    } catch (e) {
      console.log("error happened, that's life", e);
    }
  };

  async componentDidUpdate(prevProp, prevState) {
    // Typical usage (don't forget to compare props):
    if (this.state.modified !== prevState.modified) {
      this.fetchData(this.state.comments);
      this.setState({ modified: false });
    }
  }

  fetchData = async () => {
    let urlComments =
      "https://striveschool-api.herokuapp.com/api/comments/" +
      this.props.movieid;
    let headers = {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
      "Content-Type": "application/json",
    };
    try {
      let response = await fetch(urlComments, {
        method: "GET",
        headers: new Headers(headers),
      });
      let comments = await response.json();
      this.setState({ comments: comments, allComment: comments });
    } catch (e) {
      console.log(e);
    }
  };

  removeComment = async (id) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NzU3Yjk4MzViMDAwMTc1ODRlZjUiLCJpYXQiOjE2MDU3OTMxNDcsImV4cCI6MTYwNzAwMjc0N30.lxFe7Z-irNQnTdXgds1emn7EBt7CEXW_OSXlWyA-ypI",
          },
        }
      );
      this.setState({ loading: false });
      if (response.ok) {
        alert("Comment Deleted!");
        this.setState({ modified: true });
        // this.componentDidMount();
      }
    } catch (e) {
      console.log("error happened, that's life", e);
    }
  };

  handleSearch = (query) => {
    if (query) {
      let filtered = this.state.comments.filter((comment) => {
        return comment.comment.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ comments: filtered });
    } else {
      this.setState({ comments: this.state.allComment });
    }
  };

  handler() {
    this.setState({
      modified: true,
    });
  }

  render() {
    return (
      <>
        <div className="mb-5">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => this.handleSearch(e.target.value)}
          />
          {this.state.comments.map((comment, index) => {
            let variant;
            if (comment.rate >= 4) {
              variant = "success";
            } else if (comment.rate === 3) {
              variant = "warning";
            } else {
              variant = "danger";
            }
            return (
              <ListGroup key={index}>
                <ListGroup.Item>
                  <p>Comment: {comment.comment}</p>{" "}
                  <p>
                    Rating: <Badge variant={variant}>{comment.rate}</Badge>
                  </p>
                  <Button
                    onClick={() => {
                      this.removeComment(comment._id);
                    }}
                  >
                    Remove Comment
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <AddComment bookid={this.props.movieid} modify={this.handler} />
      </>
    );
  }
}

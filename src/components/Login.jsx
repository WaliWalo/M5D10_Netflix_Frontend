import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    user: { email: "", password: "" },
  };

  updateState = (e) => {
    let user = { ...this.state.user };
    let currentField = e.currentTarget.id;
    user[currentField] = e.currentTarget.value;
    this.setState({ user: user });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.user.email === this.props.user.email &&
      this.state.user.password === this.props.user.password
    ) {
      alert("Login Succesful");
      this.props.history.push("/");
      this.props.loginHandler(true);
    } else {
      alert("Wrong email or password");
    }
  };

  render() {
    return (
      <>
        <h1 style={{ color: "white" }}>LOGIN</h1>
        <Container style={{ color: "white" }}>
          <Row>
            <Col></Col>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.updateState}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.updateState}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default withRouter(Login);

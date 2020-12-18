import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../footer/footer.css";
import Facebook from "../footer/fb.png";
import Instagram from "../footer/ig.png";
import Twitter from "../footer/twitter.png";
import Youtube from "../footer/yt.png";
import CC from "../footer/cc.png";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(44, 44, 44)" }}>
        <Container className="footer text-left pt-3">
          <Row>
            <Col md={2}></Col>
            <Col md={8}>
              <a href="#home">
                <img
                  className="bg-white rounded"
                  src={Facebook}
                  alt=""
                  height="36"
                />
              </a>
              <a href="#home">
                <img
                  className="bg-white rounded"
                  src={Instagram}
                  alt=""
                  height="36"
                />
              </a>
              <a href="#home">
                <img
                  className="bg-white rounded"
                  src={Twitter}
                  alt=""
                  height="36"
                />
              </a>
              <a href="#home">
                <img src={Youtube} alt="" height="36" />
              </a>
            </Col>
            <Col md={2}></Col>
          </Row>

          <Row className="mt-5">
            <Col md={2}></Col>
            <Col md={2}>
              <p>
                <a href="#home">
                  Audio and Subtitles
                  <br />
                </a>
                <a href="#home">
                  Media Center
                  <br />
                </a>
                <a href="#home">
                  Privacy <br />
                </a>
                <a href="#home">
                  Contact Us <br />
                </a>
              </p>
            </Col>
            <Col md={2}>
              <p>
                <a href="#home">
                  Audio Description <br />
                </a>
                <a href="#home">
                  Investor Relations
                  <br />
                </a>
                <a href="#home">
                  Legal Notices <br />
                </a>
                <br />
              </p>
            </Col>
            <Col md={2}>
              <p>
                <a href="#home">
                  Help Center
                  <br />
                </a>
                <a href="#home">
                  Jobs
                  <br />
                </a>
                <a href="#home">
                  Cookie Preferences
                  <br />
                </a>
                <br />
              </p>
            </Col>
            <Col md={2}>
              <p>
                <a href="#home">
                  Gift Cards
                  <br />
                </a>
                <a href="#home">
                  Terms of Use
                  <br />
                </a>
                <a href="#home">
                  Corporate Information <br />
                </a>
                <br />
              </p>
            </Col>
            <Col md={2}></Col>
          </Row>
          <Row>
            <Col md={2}></Col>
            <Col md={2}>
              <div>
                <Button className="btn-secondary btn-outline-dark">
                  Service Code
                </Button>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <a href="#home">
                  <img
                    className="bg-white rounded"
                    src={CC}
                    alt=""
                    height="8"
                  />
                </a>
                <span className="text-dark">
                  2020 Stivix CC0 - Freeing content globally without
                  restrictions
                </span>
              </div>
            </Col>
            <Col md={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

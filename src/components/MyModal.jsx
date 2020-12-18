import React from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import Comment from "./Comment";

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Reviews
          <Container>
            <Row>
              <Col sm={6}>
                <img
                  src={props.poster}
                  alt={props.movie}
                  style={{ height: "20rem", width: "12rem" }}
                ></img>
              </Col>
              <Col sm={6}>
                <p>
                  <strong>Title: </strong> {props.moviename}
                </p>
                <p>
                  <strong>Year: </strong> {props.movieyear}
                </p>
                <p>
                  <strong>Type: </strong> {props.movietype}
                </p>
              </Col>
            </Row>
          </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Comment movieid={props.movie} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

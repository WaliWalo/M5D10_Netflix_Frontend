import React from "react";
import { Alert } from "react-bootstrap";

export default function WarningSign(props) {
  return (
    <>
      <Alert variant="danger">
        <p>No result found for '{props.query}'</p>
      </Alert>
    </>
  );
}

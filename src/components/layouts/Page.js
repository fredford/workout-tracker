import React from "react";

import { Container } from "react-bootstrap";

export default function Page(props) {
  return (
    <Container fluid className="page-container">
      <h1>{props.title}</h1>
      {props.children}
    </Container>
  );
}

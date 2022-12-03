import React from "react";
import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <Card className="m-5 text-center">
      <Card.Header>About This Page</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Footer;

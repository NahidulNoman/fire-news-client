import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsDetails = () => {
  const newsDetails = useLoaderData();
  const { details, image_url, title, category_id } = newsDetails;
  return (
    <Card>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button variant="primary">All Category News This Topic</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default NewsDetails;

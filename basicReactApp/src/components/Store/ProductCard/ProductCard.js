import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.body}</Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;

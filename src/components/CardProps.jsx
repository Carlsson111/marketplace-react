import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardProps = (props) => {
  const handleDetailsClick = () => {
    alert(`Contact: ${props.contact}`);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={props.img} alt="..." />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
          <br />
          <br />
          Contact: ***
        </Card.Text>
        <Button variant="primary" onClick={handleDetailsClick}>Details</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProps;
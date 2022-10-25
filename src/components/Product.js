import React from "react";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

const flexStyle = {
  display: "flex",
  alignItems: "center",
  gap: ".6rem",
  marginTop: ".2rem",
};

const Product = ({ image, wine, winery, id, location }) => {
  return (
    <Card className="product" style={{ border: "none" }} key={id}>
      <div className="img-container">
        <img alt={wine} src={image} />
      </div>
      <CardBody className="product-footer">
        <CardTitle tag="h6">{wine}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="p">
          {winery}
        </CardSubtitle>
        <div style={{ marginTop: ".6rem" }}>
          <div style={flexStyle}>
            <img src={require('../images/location.png')} alt="" style={{ width:'1.2rem', height:'1.2rem'}}/>
            <p>{location}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Product;

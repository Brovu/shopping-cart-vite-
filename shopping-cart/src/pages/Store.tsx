import React from "react";
import { Col, Row } from "react-bootstrap";
import { StoreItems } from "../components/StoreItems";
import storeItems from "../data/items.json";
const Store = () => {
  return (
    <>
      <h1>My Store</h1>
      <Row md={2} xs={1} lg={3} className="g-5">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;

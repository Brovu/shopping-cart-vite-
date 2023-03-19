import React from "react";
import { Container, Navbar as NavbarBS, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <NavbarBS className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            className="rounded-circle"
            variant="outline-primary
          "
            style={{
              width: "3rem",
              height: "3rem",
              cursor: "pointer",
              position: "relative",
            }}
          >
            <FaShoppingCart size={"20px"} color={"blue"} />
            <div
              className="bg-danger rounded-circle d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                position: "absolute",
                bottom: "0",
                right: "0",
                width: "1.5rem",
                height: "1.5rem",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBS>
  );
};

export default Navbar;

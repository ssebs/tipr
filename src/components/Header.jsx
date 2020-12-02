import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand>Tipr</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;

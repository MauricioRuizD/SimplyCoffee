import React from "react";

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

export default function Barra() {
  return (
    <div className="Barra-nav">
      <Navbar>
        <Container>
          <Navbar.Brand href="/home">Inicio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#link">Tipos de Café - </Nav.Link>
              <Nav.Link href="#home">Recetas - </Nav.Link>
              <Nav.Link href="#link">Preparaciones - </Nav.Link>
              <Nav.Link href="/Nosotros">Nosotros - </Nav.Link>
              <Nav.Link href="#link">Historia del Café - </Nav.Link>
              <NavDropdown title="Administración" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

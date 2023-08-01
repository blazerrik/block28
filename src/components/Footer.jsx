import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Footer() {
  return (
    <div id="navbar">
      <Navbar expand="xl" className="bg-body-tertiary" fixed="bottom">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-grow-1" >
              <Nav.Link><Link to="/">home</Link></Nav.Link>
              <Nav.Link><Link to="/blue">blue</Link></Nav.Link>
              <Nav.Link><Link to="/red">red</Link></Nav.Link>
              <Nav.Link><Link to="/yellow">yellow</Link></Nav.Link>
              <Nav.Link><Link to="/green">green</Link></Nav.Link>
              <Nav.Link><Link to="/orange">orange</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

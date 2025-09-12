
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <BsNavbar expand="lg" className="custom-navbar" sticky="top">
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="brand-name">
          Abrar<span>Portfolio</span>
        </BsNavbar.Brand>

        <BsNavbar.Toggle aria-controls="navbar-nav" />
        <BsNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-custom">Education</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
}

export default Navbar;

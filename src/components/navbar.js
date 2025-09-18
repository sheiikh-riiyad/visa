import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


function Navbars() {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="About us" id="nav-about">
                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Development cooperation</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Australia-Bangladesh relationship</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Job vacaneies</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Australians" id="nav-australians">
                <NavDropdown.Item as={Link} to="/service" >Service for Austrilians</NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown title="Connecting with Australia" id="nav-connecting">
                <NavDropdown.Item as={Link} to="/application" >Visa and migation</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Travelling to austrilia</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Doing business with Australia</NavDropdown.Item>
                <NavDropdown.Item href="#action/2">Study in Australia</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Showcasing Australia" id="nav-showcasing">
                <NavDropdown.Item href="#action/1">About Australia</NavDropdown.Item>
                
              </NavDropdown>

              <NavDropdown title="Events" id="nav-events">
                <NavDropdown.Item href="#action/1">Event</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="News and media" id="nav-news">
                <NavDropdown.Item href="#action/1">Latitude Financial Service date breach </NavDropdown.Item>
                <NavDropdown.Item href="#action/1">News </NavDropdown.Item>
                <NavDropdown.Item href="#action/1">Media </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Contact us" id="nav-contact">
                <NavDropdown.Item href="#action/1">Contact us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;

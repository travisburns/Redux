
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';



const NavBarPanel = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Redux toolkit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        
          <Nav
          >
            <Nav.Link to="/" as={Link}>Products</Nav.Link>
           
           
          </Nav>
         <Navbar.Toggle />
         <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>My bag 0</Nav.Link>
            </Navbar.Text>
         </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavBarPanel

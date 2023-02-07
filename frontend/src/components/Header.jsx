import { NavLink } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Home = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand to="/" className='ms-5'>your collection</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
          <Nav className='me-5'>
            <NavDropdown title="ADD" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                creating collection
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                adding items
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="USER NAME" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">
                your profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                sign out
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Home;
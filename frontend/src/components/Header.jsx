import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Home = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='ms-5'>your collection</Link>
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
              <Link to='/'>
                creating collection
              </Link>
              <Link to='/'>
                adding items
              </Link>
            </NavDropdown>
            <NavDropdown title="USER NAME" id="navbarScrollingDropdown">
              <Link to='/account'>
                your profile
              </Link>
              <NavDropdown.Divider />
              <Link to='/signin'>
                sign out
              </Link>
            </NavDropdown>
            <NavDropdown title="ADMIN" id="navbarScrollingDropdown">
              <Link to='/admin'>
                admin
              </Link>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Home;
import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';

const Header = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='ms-5 text-decoration-none text-muted'>
          <Badge bg="success">
            YOUR COLLECTION
          </Badge>
        </Link>
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
            {
              user?.username &&
                    <Link to='/profile' className='text-decoration-none text-muted'>
                      <Button variant="success">{user.username}</Button> 
                    </Link>
            }
            {
              user?.role === 'admin' &&
                <NavDropdown title="ADMIN" id="navbarScrollingDropdown">
                  <Link to='/admin'>
                    admin
                  </Link>
                </NavDropdown>
            }
            {
              !user &&
                <Link to='/signin'><Button variant="primary">Sign In</Button></Link>
            }
            {
              user &&
                <Link to='/'><Button variant="light" className='ms-5'>Sign Out</Button></Link>
            }
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
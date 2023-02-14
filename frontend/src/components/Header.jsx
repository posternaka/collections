import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = ({ user }) => {
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
            {
              user?.username &&
                <NavDropdown title={user.username} id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to='/account'>
                      your profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/'>
                      creating collection
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to='/'>
                      adding items
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Link to='/signin'>
                      sign out
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
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
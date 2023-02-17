import { Link } from 'react-router-dom';
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='ms-5 text-decoration-none text-muted'>your collection</Link>
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
                <NavDropdown title={user.username} id="navbarScrollingDropdown" >
                  <div className='d-flex flex-column mx-2'>
                    <Link to='/account' className='text-decoration-none text-muted'>
                      your profile
                    </Link>
                  
                  
                    <Link to='/edit_collection' className='text-decoration-none text-muted'>
                      creating collection
                    </Link>
                  
                  
                    <Link to='/' className='text-decoration-none text-muted'>
                      -
                    </Link>
                  
                  <NavDropdown.Divider />
                  
                    <Link to='/signin' className='text-decoration-none text-muted'>
                      sign out
                    </Link>
                  </div>
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
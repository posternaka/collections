import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signOut } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

import { Button, Container, Form, Nav, Navbar, Badge } from 'react-bootstrap';

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Link to='/' className='ms-5 text-decoration-none text-muted'>
          <Badge bg="success">
            YOUR COLLECTION
          </Badge>
        </Link>
          <Nav className='me-5 d-flex gap-2'>
            {
              pathname === '/signin' || pathname === '/signup'
                ? ''
                : <Link to='/'><Button variant="light" onClick={() => navigate(-1)}>Go back</Button></Link>
            }
            {
              user?.username &&
                    <Link to='/profile' className='text-decoration-none text-muted'>
                      <Button variant="success">{user.username}</Button> 
                    </Link>
            }
            {
              user?.role === 'admin' &&
                <Link to='/admin'><Button variant="primary">ADMIN</Button></Link>
            }
            {
              !user.username &&
                <Link to='/signin'><Button variant="primary">Sign In</Button></Link>
            }
            {
              user?.username &&
                <Link to='/'><Button variant="light" onClick={() => dispatch(signOut())}>Sign Out</Button></Link>
            }
          </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
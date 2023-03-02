import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Spinner from '../components/UI/spinner/Spinner';
import { FloatingLabel, Form, Stack, Button } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../redux/user/asyncAction';

import DismissibleExample from '../components/UI/toast/Toast';

const SignIn = () => {
  const dispatch = useDispatch();
  const { user, status, error } = useSelector(state => state.user);

  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignIn = () => {
    dispatch(signIn({ username, password }));
  }

  useEffect(() => {
    if(user?.username) {
      navigate('/');
    }
  }, [user])

  return (
    <Stack gap={2} className="col-md-5 mt-5 mx-auto">
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      </FloatingLabel>
      <div className='text-center mt-2'>
        <p>
          <span>Not a member? </span>  
          <Link to="/signup" className='text-center'>
            Register
          </Link>
        </p>
      </div>
      {
        status && status === 'loading' 
          ? <div className='mx-auto'><Spinner /></div>
          : <Button className="d-grid gap-2 col-6 mx-auto" variant="primary" type="submit" onClick={() => handleSignIn()} >
              Confirm
            </Button>
      }
      { error && <DismissibleExample title={"Fail"} message={error} /> }
    </Stack>
  )
}

export default SignIn;
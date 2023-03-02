import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form, Stack, Button } from 'react-bootstrap';

import Spinner from '../components/UI/spinner/Spinner';

import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../redux/user/asyncAction';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status } = useSelector(state => state.user);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignUp = () => {
    dispatch(signUp({ username, password }));
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
      {
        status && status === 'loading' 
          ? <div className='mt-5 mx-auto'><Spinner /></div>
          : <Button className="d-grid gap-2 col-6 mx-auto mt-5" variant="primary" type="submit" onClick={() => handleSignUp()} >
              Confirm
            </Button>
      }
    </Stack>
  );
}

export default SignUp;
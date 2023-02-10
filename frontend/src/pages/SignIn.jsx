import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FloatingLabel, Form, Stack, Button } from 'react-bootstrap';
import axios from 'axios';
import { authURL } from '../types/url';

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const signIn = async () => {
    try {
      const user = await axios.post(`${authURL}/signin`, {
        username,
        password
      });
      if (!user) {
        console.log('что-то пошло не так');
        return;
      }
      setUser(user.data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }

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
      <Button className="d-grid gap-2 col-6 mx-auto" variant="primary" type="submit" onClick={() => signIn()} >
        Confirm
      </Button>
    </Stack>
  )
}

export default SignIn;
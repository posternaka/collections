import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel, Form, Stack, Button } from 'react-bootstrap';
import axios from 'axios';
import { authURL } from '../types/url';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const signUp = async () => {
    try {
      await axios.post(`${authURL}/signup`, {
        username,
        password
      });
      navigate("/signin");
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
      <Button className="d-grid gap-2 col-6 mx-auto mt-5" variant="primary" type="submit" onClick={() => signUp()} >
        Confirm
      </Button>
    </Stack>
  );
}

export default SignUp;
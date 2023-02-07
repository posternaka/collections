import { Link } from 'react-router-dom';
import { FloatingLabel, Form, Stack, Button } from 'react-bootstrap';

const SignIn = () => {
  return (
    <Stack gap={2} className="col-md-5 mt-5 mx-auto">
      <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <div className='text-center mt-2'>
        <p>
          <span>Not a member? </span>  
          <Link to="/signup" className='text-center'>
            Register
          </Link>
        </p>
      </div>
      <Button className="d-grid gap-2 col-6 mx-auto" variant="primary" type="submit">
        Confirm
      </Button>
    </Stack>
  )
}

export default SignIn;
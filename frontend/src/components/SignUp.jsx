import { Link } from 'react-router-dom';
import { Button, Col, Form, Row, Stack } from 'react-bootstrap';

const SignUp = () => {
  return (
    <Stack gap={2} className="col-md-5 mt-5 mx-auto">
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <div className='text-center mt-2'>
          <p> 
            <Link to="/signin" className='text-center'>
              Back to sign in page
            </Link>
          </p>
        </div>
        <Button className="d-grid gap-2 col-6 mx-auto"  variant="primary" type="submit">
          Confirm
        </Button>
    </Stack>
  );
}

export default SignUp;
import { Link } from 'react-router-dom';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';

const Item = () => {
  return (
    <Container>
      <Link to='/' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
          <span className='display-1'>+</span>
          <p>add new item</p>
      </Link>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span>№1 Featured</span>
          <div className='d-flex gap-2'>
              <Button variant="outline-warning" size="sm">
                  Edit 
              </Button>
              <Button variant="outline-danger" size="sm">
                  Delete
              </Button>
          </div>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex gap-3 align-items-center'>
            <Form.Check type='checkbox' label='checkbox' id='checkbox' />
            <Form.Control type="number" placeholder="Enter number" />
            <Form.Control type="text" placeholder="Enter text" />
            <Form.Control type="text" placeholder="Enter textarea" />
            <Form.Control type="date" placeholder="Enter date" />
          </ListGroup.Item>
        </ListGroup>
        <div className='my-1 mx-1 d-flex gap-1 justify-content-center align-items-center'>
          
          <Badge pill bg="primary">
            #primary
          </Badge>
          <Badge pill bg="secondary">
            #secondary
          </Badge>
          <Badge pill bg="success">
            #success
          </Badge>
          <Badge pill bg="danger">
            #danger
          </Badge>
        </div>
      </Card>
    </Container>
  )
}

export default Item
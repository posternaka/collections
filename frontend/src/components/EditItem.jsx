import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';

const EditItem = () => {
  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <Form.Control className='w-25' type="text" placeholder="Item name" />
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex gap-3 align-items-center'>
            <Form.Check type='checkbox' label='checkbox' id='checkbox' />
            <Form.Control type="number" placeholder="Enter number" />
            <Form.Control type="text" placeholder="Enter text" />
            <Form.Control as="textarea" rows={1}  placeholder="Enter textarea" />
            <Form.Control type="date" placeholder="Enter date" />
          </ListGroup.Item>
        </ListGroup>
        <div className='my-1 mx-1 d-flex gap-1 align-items-center'>
          <Form.Control className='w-25' type="text" placeholder="add tag" />
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
      <Button className='mt-3 d-grid gap-2 col-2 mx-auto' variant="primary" size="lg">
          Save 
      </Button>
    </Container>
  )
}

export default EditItem
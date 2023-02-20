import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';

const ReadItem = () => {
  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span>№1 Harry Potter</span>
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
          <ListGroup.Item className='d-flex flex-column gap-3'>
            <Form.Check type='checkbox' label='прочитано' id='checkbox' />
            <span className='opacity-75 fw-bold'>Сборы: </span><span>974,8 миллиона USD</span>
            <span className='opacity-75 fw-bold'>Автор: </span><span>Д. Роулинг</span>
            <span className='opacity-75 fw-bold'>Описание: </span><span>Жизнь десятилетнего Гарри Поттера нельзя назвать сладкой</span>
            <span className='opacity-75 fw-bold'>Дата выпуска:</span><span>2001г.</span>
          </ListGroup.Item>
        </ListGroup>
        <div className='my-1 mx-1 d-flex gap-1 align-items-center'>
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

export default ReadItem;
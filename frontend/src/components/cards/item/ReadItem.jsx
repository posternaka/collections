import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

const ReadItem = ({ item, sets }) => {
  const { id, nameItem, params } = item;
  const settings = JSON.parse(sets);

  console.log(params, settings);

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span>№{id} {nameItem}</span>
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
            {
              settings.map((it, idx) => (
                <div key={idx} className='d-flex gap-2'>
                  <span className='opacity-75 fw-bold'>{joinValue(it.name)}: </span>
                  <span>{params[it.name]}</span>
                </div>
              ))
            }
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

{/* <span className='opacity-75 fw-bold'>Автор: </span><span>Д. Роулинг</span> */}
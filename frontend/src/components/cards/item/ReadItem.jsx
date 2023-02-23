import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

import { deleteItem } from '../../../rest/item';

const ReadItem = ({ item, sets, tags, setIsEdit }) => {
  const { id, nameItem, params } = item;
  const settings = JSON.parse(sets);

  const tag = tags.length > 0 ? tags.find(it => +it.itemId === id)?.tags : '';

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span className='fw-bold'>{nameItem}</span>
          <div className='d-flex gap-2'>
              <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)} >
                  Edit 
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => deleteItem(id)}>
                  Delete
              </Button>
          </div>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-2'>
            <div className='d-flex gap-1 align-items-center'>
              {
                tag.length > 0
                  ? tag.map(it => (
                    <Badge pill bg="primary">
                      #{it}
                    </Badge>
                  ))
                  : []
              }
            </div>
            {
              settings.map((it) => (
                <div className='d-flex gap-2'>
                  <span className='opacity-75 fw-bold'>{joinValue(it.name)}: </span>
                  <span>{params[it.name]}</span>
                </div>
              ))
            }
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default ReadItem;
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setFields } from '../redux/item/ItemSlice';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { createItem } from '../rest/item';
import { joinValue } from '../helpers/index';

const AddItem = () => {
  const collection = useSelector(state => state.item.collection);
  const fields = useSelector(state => state.item.fields);
  const itemName = useSelector(state => state.item.itemName);
  const dispatch = useDispatch();
  const jsonData = JSON.parse(collection.settings);

  console.log(fields, itemName);

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header>
          <Form.Control 
            className='w-25' 
            type="text" 
            placeholder="Item name" 
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-2'>
            <div className='d-flex gap-1 align-items-center'>
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
            {
              jsonData.map(it => (
                <Form.Control
                  key={ it.orders }
                  type={ it.type }
                  placeholder={ `Enter ${joinValue(it.name)}` }
                  onChange={(e) => dispatch(setFields({ name: it.name, value: e.target.value }))}
                />
              ))
            }
          </ListGroup.Item>
          <ListGroup.Item className='d-flex flex-column gap-2'>
            comments
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button className='mt-3 d-grid gap-2 col-2 mx-auto' variant="primary" size="lg" onClick={() => createItem({ collectionId: collection.id, nameItem: itemName, params: fields })}>
          Save 
      </Button>
    </Container>
  )
}

export default AddItem;
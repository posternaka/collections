import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOptions } from '../redux/item/itemSlice';
import { Card, ListGroup, Container, Form, Button, Badge } from 'react-bootstrap';
import { joinValue } from '../helpers/index';

import { addItem } from '../redux/item/asyncAction';
import { createTag } from '../redux/tag/asyncAction';
import { createLike } from '../redux/like/asyncAction';
import { createComment } from '../redux/comment/asyncAction';

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');

  const [itemTags, setItemTags] = useState('');
  const [tags, setTags] = useState([]);

  const options = useSelector(state => state.item.options);
  const collection = useSelector(state => state.collection.collection);
  const newItemId = useSelector(state => state.item.newItemId);

  const addTag = () => {
    setTags([...tags, itemTags]);
    setItemTags('');
  }

  const saveItem = async () => {
    dispatch(addItem({ collectionId: collection.id, nameItem: itemName, params: options }));
    dispatch(createLike({ itemId: '' }));
    dispatch(createTag({ itemId: '' }));
    dispatch(createComment({ itemId: '' }))
    // navigate(`/collection/${collection.id}`);
  }

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header>
          <Form.Control 
            className='w-25' 
            type="text" 
            placeholder="Item name" 
            onChange={(e) => setItemName(e.target.value)}
          />
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-2'>
            <div className='d-flex gap-1'>
              {
                tags.map((it, idx) => (
                  <Badge key={idx} pill bg="primary">
                    #{it}
                  </Badge>
                ))
              }
            </div>
            <div className='d-flex gap-2'>
              <Form.Control className='w-25' type="text" placeholder="add tag" value={itemTags} onChange={(e) => setItemTags(e.target.value)} />
              <Button onClick={() => addTag()}>+</Button>
            </div>
            {
              collection.settings && collection.settings.map((it, idx) => (
                <Form.Control
                  key={idx}
                  type={ it.type }
                  placeholder={ `Enter ${joinValue(it.name)}` }
                  onChange={(e) => dispatch(setOptions({ nameOption: it.name, valueOption: e.target.value }))}
                />
              ))
            }
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button className='mt-3 d-grid gap-2 col-2 mx-auto' variant="primary" size="lg" onClick={() => saveItem()}>
          Save 
      </Button>
    </Container>
  )
}

export default AddItem;
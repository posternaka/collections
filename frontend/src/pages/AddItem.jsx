import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setOptions } from '../redux/item/itemSlice';
import { Card, ListGroup, Container, Form, Button, Badge } from 'react-bootstrap';
import { joinValue } from '../helpers/index';

import { addItem } from '../redux/item/asyncAction';
import { createTag } from '../redux/tag/asyncAction'; 

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');

  const [itemTags, setItemTags] = useState([]);
  const [tagValue, setTagValue] = useState([]);

  const options = useSelector(state => state.item.options);
  const collection = useSelector(state => state.collection.collection);
  const tags = useSelector(state => state.tag.tags);

  const saveItem = async () => {
    const correctTags = tags.filter(tag => itemTags.includes(tag.tag)).map(tag => ({ id: tag.id, tag: tag.tag }));
    dispatch(addItem({ collectionId: collection.id, nameItem: itemName, params: options, tags: correctTags }));
    navigate(`/collection/${collection.id}`);
  }

  const addTag = () => {
    const onlyValueTags = tags.map(tag => tag.tag);
    if(onlyValueTags.includes(tagValue)) {
      console.log('показать список с тэгами для выбора');
      setTagValue('');
      return
    }
    dispatch(createTag({ tag: tagValue }));
    setItemTags([...itemTags, tagValue]);
    setTagValue('');
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
                itemTags.map((it, idx) => (
                  <Badge key={idx} pill bg="primary">
                    #{it}
                  </Badge>
                ))
              }
            </div>
            <div className='d-flex gap-2'>
              <Form.Control className='w-25' type="text" placeholder="add tag" value={tagValue} onChange={(e) => setTagValue(e.target.value)} />
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
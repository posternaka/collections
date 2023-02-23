import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setFields } from '../redux/item/ItemSlice';
import { setTagName } from '../redux/tag/tagSlice';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { createItem } from '../rest/item';
import { createTag } from '../rest/tag';
import { joinValue } from '../helpers/index';

const AddItem = () => {
  const [nameTag, setNameTag] = useState('');

  const collection = useSelector(state => state.item.collection);
  const fields = useSelector(state => state.item.fields);
  const itemName = useSelector(state => state.item.itemName);
  const tags = useSelector(state => state.tag.tags);
  const dispatch = useDispatch();
  const jsonData = JSON.parse(collection.settings);

  // console.log(tags);

  const addTag = () => {
    dispatch(setTagName([...new Set([...tags, nameTag])]));
    setNameTag('');
  }

  const saveItem = async () => {
    const item = await createItem({ collectionId: collection.id, nameItem: itemName, params: fields });
    createTag({ collectionId: item.collectionId, itemId: item.id, tags });
    dispatch(setTagName([]));
  }

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
            <div className='d-flex gap-1'>
              {
                tags.map(it => (
                  <Badge pill bg="primary">
                    #{it}
                  </Badge>
                ))
              }
            </div>
            <div className='d-flex gap-2'>
              <Form.Control className='w-25' type="text" placeholder="add tag" value={nameTag} onChange={(e) => setNameTag(e.target.value)} />
              <Button onClick={() => addTag()}>+</Button>
            </div>
            {
              jsonData.map(it => (
                <Form.Control
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
      <Button className='mt-3 d-grid gap-2 col-2 mx-auto' variant="primary" size="lg" onClick={() => saveItem()}>
          Save 
      </Button>
    </Container>
  )
}

export default AddItem;
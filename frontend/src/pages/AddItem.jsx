import { useState } from 'react';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setFields } from '../redux/item/ItemSlice';

const jsondata = [
  {"name":"Author","type":"text","stateName":"text1","orders":1},
  {"name":"Data","type":"number","stateName":"number1","orders":2},
  {"name":"Count","type":"number","stateName":"number2","orders":3},
  {"name":"Main Character","type":"text","stateName":"text2","orders":4}
];

const AddItem = () => {
  const fileds = useSelector(state => state.item.fields);
  console.log(fileds);
  const dispatch = useDispatch();

  const [commonData, setCommonData] = useState([]);

  const primer = () => {
    jsondata.map(it => setCommonData([...commonData, { name: it.name, value: [it.stateName] }]));
  }


  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <Form.Control className='w-25' type="text" placeholder="Item name" />
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-3'>
            {
              jsondata.map(it => (
                <Form.Control
                  key={ it.orders }
                  type={ it.type }
                  placeholder={ `Enter ${it.name}` }
                  onChange={ (e) => dispatch(setFields({ name: it.name, value: e.target.value })) }
                />
              ))
            }
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
      <Button className='mt-3 d-grid gap-2 col-2 mx-auto' variant="primary" size="lg" onClick={() => primer()}>
          Save 
      </Button>
    </Container>
  )
}

export default AddItem;
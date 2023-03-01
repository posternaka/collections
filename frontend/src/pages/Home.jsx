import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCollections } from '../redux/collection/asyncAction';
import { getAllItems } from '../redux/item/asyncAction';
import { getTags } from '../redux/tag/asyncAction';

import { Container, Col, Row } from 'react-bootstrap';

const Home = () => {
  const dispatch = useDispatch();
  const collection = useSelector(state => state.collection.allCollections);
  const item = useSelector(state => state.item.allItems);


  // console.log(tag, 'tag');
  // console.log(collection, 'collection');
  // console.log(item, 'item');

  useEffect(()=> {
    dispatch(getAllCollections());
    dispatch(getAllItems());
    dispatch(getTags());
  }, [])


  useEffect(() => {
  }, []);

  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={3}>
          <h2>Tag</h2>
        </Col>
        <Col sm={9}>
          <h2>Collections</h2>
          <h2>Items</h2>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
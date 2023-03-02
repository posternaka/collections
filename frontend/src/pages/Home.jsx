import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getAllCollections } from '../redux/collection/asyncAction';
import { getAllItems, getCountCollectionItems } from '../redux/item/asyncAction';
import { getTags, getLastTags } from '../redux/tag/asyncAction';
import { getLastItems } from '../redux/item/asyncAction';

import { Card, ListGroup, Container, Badge, Button, Col, Row } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import ReadItem from '../components/cards/item/ReadItem';
import ReadCollection from '../components/cards/collection/ReadCollection';

const Home = () => {
  const dispatch = useDispatch();

  const collection = useSelector(state => state.collection.allCollections);
  const countItems = useSelector(state => state.item.countItems);
  const lastItems = useSelector(state => state.item.lastItems);
  const allItems = useSelector(state => state.item.allItems);
  const tags = useSelector(state => state.tag.lastTags);

  useEffect(()=> {
    dispatch(getAllCollections());
    dispatch(getAllItems());
    dispatch(getTags());
    dispatch(getCountCollectionItems());
    dispatch(getLastItems());
    dispatch(getLastTags());
  }, []);

  const cloudTags = allItems && allItems.map(item => item.tags.includes())

  return (
    <Container>
      <Row className='mt-5'>
        <Col sm={3}>
          <h2>Tag</h2>
          {
            tags && 
              tags.map(tag => (
                <Badge key={tag.id} pill bg="primary">
                    #{tag.tag}
                  </Badge>
              ))
          }
        </Col>
        <Col sm={9}>
          <div >
            <h2>Items</h2>
            <div className='d-flex gap-2 mb-4'>
            {
              countItems &&
                countItems.map(collection => (
                      <Card key={collection.id} className='shadow'>
                        <ReadCollection collection={collection} />
                      </Card>
                ))
            }
            </div>
            <h2>Collections</h2>
            <div className='mb-4'> 
              {
                lastItems &&
                  lastItems.map(item => (
                    <ReadItem key={item.id} item={item} />
                  ))
              }
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
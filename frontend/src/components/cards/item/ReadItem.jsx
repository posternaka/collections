import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Card, ListGroup, Container, Badge, Button } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

import { deleteItem } from '../../../redux/item/asyncAction';
import { Link } from 'react-router-dom';

const ReadItem = ({ item, setIsEdit }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const collection = useSelector(state => state.collection.allCollections);

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span className='fw-bold'>{item.nameItem}</span>
            {
              pathname === '/'
                ? ''
                : <div className='d-flex gap-2'>
                    <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)} >
                        Edit 
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => dispatch(deleteItem(item.id))} >
                        Delete
                    </Button>
                  </div>
            }
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className='d-flex flex-column gap-2'>
            <div className='d-flex gap-1 align-items-center'>
              {
                item.tags &&
                  item.tags.map(tag => (
                    <Badge key={tag.id} pill bg="primary">
                      #{tag.tag}
                    </Badge>
                  ))
              }
            </div>
            <Link to={`/item/${item.id}`} className='text-decoration-none text-reset'>
              {
                collection && collection.find(col => col.id === +item.collectionId).settings.map((param, idx) => (
                    <div key={idx} className='d-flex gap-2'>
                      {
                        item.params[param.name]
                          ? <>
                              <span className='opacity-75 fw-bold'>{joinValue(param.name)}: </span>
                              <span>{item.params[param.name]}</span>
                            </>
                          : ''
                      }
                    </div>
                ))
              }
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default ReadItem;
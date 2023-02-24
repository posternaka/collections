import { useState } from 'react';
import { Card, ListGroup, Container, Form, Badge, Button } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

import { deleteItem, getFavorite, updateFavorite } from '../../../rest/item';

const ReadItem = ({ username, item, sets, tags, setIsEdit }) => {
  const { id, nameItem, params, favorite } = item;
  const settings = JSON.parse(sets);
  const [isHeart, setIsHeart] = useState(favorite.includes(username));

  const tag = tags.length > 0 ? tags.find(it => +it.itemId === id)?.tags : '';

  const checkLike = async () => {
    const favorite = await getFavorite(id);

    if(favorite.favorite.indexOf(username) === -1) {
      const result = [...favorite.favorite, username];
      setIsHeart(true);
      return await updateFavorite(id, result);
    } else {
      const result = favorite.favorite.filter(it => it !== username);
      setIsHeart(false);
      return await updateFavorite(id, result);
    }
  }

  return (
    <Container>
      <Card className='mt-3'>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <span className='fw-bold'>{nameItem}</span>
          {
            isHeart
              ? <span role="button" className="lead" onClick={() => checkLike()}>&#10084;</span>
              : <span role="button" className="lead" onClick={() => checkLike()}>&#129293;</span>
          }
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
          <ListGroup.Item>
            comments
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default ReadItem;
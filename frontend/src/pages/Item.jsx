import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, Container, Badge, Button, Toast, Form } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { joinValue } from '../helpers';
import { getItem } from '../redux/item/asyncAction';

import { getLike, updateLike, createLike } from '../redux/like/asyncAction';
import { createComment, getComments, deleteComment } from '../redux/comment/asyncAction';

import { formatDate } from '../helpers/date';

const Item = ({ user }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [commentValue, setCommentValue] = useState('');
    const item = useSelector(state => state.item.item);
    const collection = useSelector(state => state.collection.collection);
    const like = useSelector(state => state.like.like);
    const comments = useSelector(state => state.comment.comments);

    console.log(item);

    useEffect(() => {
        dispatch(getLike(user.id));
        dispatch(getItem(id));
        dispatch(getComments(id));
    }, []);

    const checkUserLike = () => {
        if (!like) {
            return dispatch(createLike({ userId: user.id, itemId: [item.id] }));
        } else if (like && like.itemId?.includes(item.id)) {
            const likes = like.itemId.filter(it => it !== item.id);
            return dispatch(updateLike({ userId: user.id, body: likes }));
        } else if (like && !like.itemId?.includes(item.id)) {
            const likes = [...like.itemId, item.id];
            return dispatch(updateLike({ userId: user.id, body: likes }));
        }
    }

    const handleAddComment = () => {
        dispatch(createComment({ itemId: item.id, username: user.username, comment: commentValue }))
        setCommentValue('');
    }

    return (
        <Container>
            <Card className='mt-3'>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <span className='fw-bold'>{item.nameItem}</span>
                    {
                        like &&
                            like.itemId?.includes(item.id)
                                ? <span role="button" className="lead" onClick={() => checkUserLike()} >&#10084;</span>
                                : <span role="button" className="lead" onClick={() => checkUserLike()} >&#129293;</span>
                    }
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-1 align-items-center'>
                            {
                                item.tags &&
                                    item.tags.map(tag => (
                                        <Badge pill bg="primary">
                                            #{tag.tag}
                                        </Badge>
                                    ))
                            }
                        </div>
                        {
                            item.params && collection.settings && collection.settings.map((param, idx) => (
                                <div key={idx} className='d-flex gap-2'>
                                    <span className='opacity-75 fw-bold'>{joinValue(param.name)}: </span>
                                    <span>{item.params[param.name]}</span>
                                </div>
                        ))
                    }
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex flex-column gap-2'>
                        <div className='d-flex gap-1'>
                            <Form.Control 
                                className='w-50'
                                type='text' 
                                placeholder="add comment" 
                                value={commentValue} 
                                onChange={(e) => setCommentValue(e.target.value)} 
                            />
                            <Button variant="primary" onClick={() => handleAddComment()} >Add</Button> 
                        </div>
                        {
                            comments.map(comment => (
                                <div>
                                    <Toast.Header closeButton={false}>
                                        <strong className="me-auto">{comment.username}</strong>
                                        <small>{formatDate(comment.createdAt)}</small>
                                        <small role="button" className='ms-5 lead' onClick={() => dispatch(deleteComment(comment.id))}>&#9932;</small>
                                    </Toast.Header>
                                    <Toast.Body>{comment.comment}</Toast.Body>
                                </div>
                            ))
                        }
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}

export default Item;
import { useState } from 'react';
import { Card, ListGroup, Container, Form, Button, Badge } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setOptions } from '../../../redux/item/itemSlice';
import { joinValue } from '../../../helpers/index';

import { updateItem } from '../../../redux/item/asyncAction'; 
import { addTag } from '../../../redux/tag/asyncAction';

const EditItem = ({ item, setIsEdit }) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(item.nameItem);
    
    const collection = useSelector(state => state.collection.collection);
    const options = useSelector(state => state.item.options);
    const tag = useSelector(state => state.tag.itemTags);
    const [newTag, setNewTag] = useState('');

    const saveItemChanges = () => {
        dispatch(updateItem({ id: item.id, body: { nameItem: newName, params: options }}));
        dispatch(addTag({ id: item.id, body: [...tag?.tags, newTag]}));
        setNewTag('');
        setIsEdit(false);
    }

    const updateTags = () => {
        dispatch(addTag({ id: item.id, body: [...tag?.tags, newTag]}));
        setNewTag('');
    }

    return (
        <Container>
            <Card className='mt-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <Form.Control
                    className='w-25'
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <div className='d-flex gap-2'>
                    <Button 
                        variant="outline-warning" 
                        size="sm" 
                        onClick={() => saveItemChanges()} 
                    >
                        Save 
                    </Button>
                </div>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item className='d-flex flex-column gap-2'>
                    <div className='d-flex gap-1 align-items-center'>
                        {
                            tag?.tags && 
                                <div className='d-flex gap-1 align-items-center'>
                                    {
                                        tag.tags?.map(it => (
                                            <Badge pill bg="primary">
                                                #{it}
                                            </Badge>
                                        ))
                                    }
                                </div>
                        }
                    </div>
                    <div className='d-flex gap-2'>
                        <Form.Control className='w-25' type="text" placeholder="add tag" value={newTag} onChange={(e) => setNewTag(e.target.value) } />
                        <Button onClick={() => updateTags()}>+</Button>
                    </div>
                        {
                            collection.settings && collection.settings.map((param, idx) => (
                                <div key={idx} className='d-flex gap-2 align-items-center'>
                                    <span className='opacity-75 fw-bold'>{ joinValue(param.name) }: </span>
                                    <Form.Control 
                                        className='w-25' 
                                        type={ param.type } 
                                        placeholder={`${ joinValue(param.name) }`} 
                                        defaultValue={item.params[param.name]}
                                        onChange={(e) => dispatch(setOptions({ nameOption: param.name, valueOption: e.target.value }))} 
                                    />
                                </div>
                            ))
                        }
                </ListGroup.Item>
            </ListGroup>
            </Card>
        </Container>
    )
}

export default EditItem


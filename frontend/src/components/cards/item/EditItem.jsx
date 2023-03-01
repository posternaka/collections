import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import OverlayComponent from '../../UI/overlay/OverlayComponent';

import { Card, ListGroup, Container, Form, Button, Badge } from 'react-bootstrap';
import { joinValue } from '../../../helpers/index';

import { updateItem } from '../../../redux/item/asyncAction'; 
import { createTag } from '../../../redux/tag/asyncAction'; 
import { setOptions, setOptionsWithEdit } from '../../../redux/item/itemSlice';


const EditItem = ({ item, setIsEdit }) => {
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(item.nameItem);
    const [itemTags, setItemTags] = useState(item.tags.map(it => it.tag));
    const [tagValue, setTagValue] = useState([]);

    useEffect(() => {
        dispatch(setOptionsWithEdit(item.params));
    }, []);

    const collection = useSelector(state => state.collection.collection);
    const options = useSelector(state => state.item.options);
    const tags = useSelector(state => state.tag.tags);

    const saveItemChanges = () => {
        // const correctTags = tags.filter(tag => itemTags.includes(tag.tag)).map(tag => ({ id: tag.id, tag: tag.tag }));
        dispatch(updateItem({ id: item.id, body: { nameItem: newName, params: options, tags: itemTags }}));
        setIsEdit(false);
    }

    const addTag = () => {
        const onlyValueTags = tags.map(tag => tag.tag);
        if(onlyValueTags.includes(tagValue)) {
            setItemTags([...itemTags, tagValue]);
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
                        <div className='d-flex gap-1 align-items-center'>
                                {
                                    itemTags.map(tag => (
                                        <Badge pill bg="primary">
                                            #{tag}
                                        </Badge>
                                    ))
                                }
                            </div>
                    }
                    </div>
                    <OverlayComponent tags={tags} tagValue={tagValue} setTagValue={setTagValue} addTag={addTag} />
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


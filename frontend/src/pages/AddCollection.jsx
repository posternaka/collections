import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';
import { splitValue, joinValue } from '../helpers/index';

import { useDispatch, useSelector } from 'react-redux';
import { 
    setCollectionName, 
    setCollectionTheme, 
    setCollectionDesc, 
    setCollectionSettings, 
    resetCollectionSettings,
    setOptionName, 
    setOptionType 
} from '../redux/collection/collectionSlice';
import { addCollection } from '../redux/collection/asyncAction';

import { THEMES, TYPES } from '../types/theme';

import ModalWindow from '../components/UI/modal/ModalWindow';

const AddCollection = ({ userId }) => {
    const dispatch = useDispatch();
    const collectionValues = useSelector(state => state.collection.updateCollection);
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const handleSetJson = () => {
        dispatch(setCollectionSettings(
            { 
                name: splitValue(collectionValues.optionName), 
                type: collectionValues.optionType, 
                orders: collectionValues.settingsCollection.length + 1,
            }
        ));
        dispatch(setOptionName(''));
        dispatch(setOptionType(TYPES[0]));
        setShow(false);
    }

    const saveSetting = () => {
        const newCollection = {
            idUser : userId,
            image: "img",
            collectionName: collectionValues.collectionName,
            theme : collectionValues.theme,
            description : collectionValues.description,
            settings : collectionValues.settingsCollection
        };

        dispatch(addCollection(newCollection));
        navigate('/profile');

        dispatch(setCollectionName(''));
        dispatch(setCollectionTheme(THEMES[0]));
        dispatch(setCollectionDesc(''));
        dispatch(resetCollectionSettings());
    }

    return (
        <Container>
            <Row xs={4} md={2} className="mt-3 mb-3 justify-content-center">
                <Col>
                    <Card className='shadow'>
                        <Card.Body className='d-flex flex-column gap-2'>
                            <Form.Group controlId="formFileLg">
                                <Form.Label>Choose image</Form.Label>
                                <Form.Control type="file" size="lg" />
                            </Form.Group>
                            <div className='d-flex justify-content-between gap-5'>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Collection Name"
                                    value={collectionValues.collectionName}
                                    onChange={(e) => dispatch(setCollectionName(e.target.value))}
                                />
                                <Form.Select 
                                    aria-label="Default select example" 
                                    value={collectionValues.theme}
                                    onChange={ (e) => dispatch(setCollectionTheme(e.target.value)) }
                                >
                                    {
                                        THEMES.map((it, idx) => (
                                            <option key={idx} value={it}>{it}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                            <Form.Control 
                                as="textarea" 
                                rows={3} 
                                value={collectionValues.description}
                                onChange={ (e) => dispatch(setCollectionDesc(e.target.value)) } 
                            />
                            <span>Setting items in your collection:</span>
                            <div className="d-grid gap-2">
                                <Button variant="light" onClick={() => setShow(true)}>+</Button>
                                <ModalWindow show={show} setShow={setShow} handleSetJson={handleSetJson}>
                                    <div className='d-flex gap-5'>
                                        <Form.Control 
                                            type="text"
                                            placeholder="Name"
                                            value={collectionValues.optionName}
                                            onChange={ (e) => dispatch(setOptionName(e.target.value)) }
                                        />
                                        <Form.Select 
                                            aria-label="Default select example"
                                            value={collectionValues.optionType}
                                            onChange={ (e) => dispatch(setOptionType(e.target.value)) }
                                        >
                                            {
                                                TYPES.map((it, idx) => (
                                                    <option key={idx} value={it}>{it}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                </ModalWindow>
                            </div>
                            <ListGroup variant="flush">
                                {
                                    collectionValues.settingsCollection.map((it, idx) => (
                                            <ListGroup.Item key={idx} className='d-flex gap-2'>
                                                <Card.Title className='mb-0'>
                                                    {joinValue(it.name)}
                                                </Card.Title>
                                                <Card.Text className='opacity-50'>
                                                    (type: {it.type})
                                                </Card.Text>
                                            </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                            <div className='d-flex justify-content-end flex-row gap-2'>
                                <Button variant="primary" size="lg" onClick={() => saveSetting()}>
                                    Save 
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default AddCollection;
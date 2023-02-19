import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, ListGroup } from 'react-bootstrap';

import { createCollection } from '../rest/collection';
import { theme, options } from '../types/theme';

import ModalWindow from '../components/UI/modal/ModalWindow';

const AddCollection = ({ userId }) => {
    const [show, setShow] = useState(false);
    const [settingsItem, setSettingsItem] = useState([]);
    const [collectionName, setCollectionName] = useState('');
    const [descCollection, setDescCollection] = useState('');
    const [themeCollection, setThemeCollection] = useState('');
    const [modalName, setModalName] = useState('');
    const [modalType, setModalType] = useState('checkbox');

    const handleSetJson = () => {
        setSettingsItem([...settingsItem, { name: modalName, type: modalType, orders: settingsItem.length + 1 }]);
        setModalName('');
        setModalType('');
        setShow(false);
    } 

    const saveSetting = () => {
        const dataCollection = {
            idUser : userId,
            image: "img",
            collectionName,
            theme : themeCollection,
            description : descCollection,
            settings : settingsItem
        }

        createCollection(dataCollection);

        setCollectionName('');
        setThemeCollection('');
        setDescCollection('');
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
                                <Form.Control type="text" placeholder="Collection Name" onChange={(e) => setCollectionName(e.target.value)}/>
                                <Form.Select aria-label="Default select example" onChange={(e) => setThemeCollection(e.target.value)}>
                                    {
                                        theme.map((it, idx) => (
                                            <option key={idx} value={it}>{it}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setDescCollection(e.target.value)} />
                            <span>Setting items in your collection:</span>
                            <div className="d-grid gap-2">
                                <Button variant="light" onClick={() => setShow(true)}>+</Button>
                                <ModalWindow show={show} setShow={setShow} handleSetJson={handleSetJson}>
                                    <div className='d-flex gap-5'>
                                        <Form.Control type="text" placeholder="Name" value={modalName} onChange={(e) => setModalName(e.target.value)} />
                                        <Form.Select aria-label="Default select example" onClick={(e) => setModalType(e.target.value)}>
                                            {
                                                options.map((it, idx) => (
                                                    <option key={idx} value={it}>{it}</option>
                                                ))
                                            }
                                        </Form.Select>
                                    </div>
                                </ModalWindow>
                            </div>
                            <ListGroup variant="flush">
                                {
                                    settingsItem.map((it, idx) => (
                                            <ListGroup.Item key={idx} className='d-flex gap-2'>
                                                <Card.Title className='mb-0'>
                                                    {it.name}
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
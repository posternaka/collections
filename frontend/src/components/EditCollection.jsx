import { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

import ModalWindow from './UI/modal/ModalWindow';

const EditCollection = () => {
    const [show, setShow] = useState(false);
    const [settingsItem, setSettingsItem] = useState([]);
    const [modalName, setModalName] = useState('');
    const [modalType, setModalType] = useState('checkbox');
    const [countTypeClicks, setCountTypeClicks] = useState([]);
    // let fields = [
    //     { type: 'checkbox', html: `<Form.Check type='checkbox' label='checkbox' id='checkbox' />` },
    //     { type: 'number', html: `<Form.Control type="number" placeholder="Enter number" />` },
    //     { type: 'text', html: `<Form.Control type="text" placeholder="Enter text" />` },
    //     { type: 'textarea', html: `<Form.Control as="textarea" rows={1}  placeholder="Enter textarea" />` },
    //     { type: 'boolean', html: `<Form.Control type="date" placeholder="Enter date" />` },
    // ];
    let options = ['checkbox', 'number', 'text', 'textarea', 'boolean'];

    if(countTypeClicks.filter(it => it === modalType).length > 2) {
        console.log('da');
        console.log(options.filter(it => it !== modalType));
        return options = options.filter(it => it !== modalType);
    }

    console.log(countTypeClicks);

    const saveSetting = () => {
        setCountTypeClicks([...countTypeClicks, modalType]);
        setSettingsItem([...settingsItem, { name: modalName, type: modalType }]);

        setModalName('');
        setModalType('');
        setShow(false);
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
                                <Form.Control type="text" placeholder="Collection Name" />
                                <Form.Select aria-label="Default select example">
                                    <option>Choose a theme</option>
                                    <option value="1">Book</option>
                                    <option value="2">Movie</option>
                                    <option value="3">Games</option>
                                </Form.Select>
                            </div>
                            <Form.Control as="textarea" rows={3} />
                            <span>Setting items in your collection:</span>
                            <div className="d-grid gap-2">
                                <Button variant="light" onClick={() => setShow(true)}>+</Button>
                                <ModalWindow show={show} setShow={setShow} saveSetting={saveSetting}>
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
                            {
                                settingsItem.map(it => (
                                    <div className='d-flex gap-5'>
                                        <span>{it.name}</span>
                                        <span>{it.type}</span>
                                    </div>
                                ))
                            }
                            <div className='d-flex justify-content-end flex-row gap-2'>
                                <Button variant="primary" size="lg">
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

export default EditCollection
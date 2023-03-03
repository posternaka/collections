import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button, Form, ListGroup} from 'react-bootstrap';

import { THEMES, TYPES } from '../types/theme';
import { splitValue, joinValue } from '../helpers/index';
import { validButton } from '../helpers/validButton';

import { addCollection } from '../redux/collection/asyncAction';
import ModalWindow from '../components/UI/modal/ModalWindow';
import InputMemo from '../components/UI/forms/InputMemo';

const AddCollection = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const user = useSelector(state => state.user.user);
    const checkUserId = searchParams.get('userId') ? searchParams.get('userId') : user.id;
    const [show, setShow] = useState(false);

    const [nameCol, setNameCol] = useState('');
    const [themeCol, setThemeCol] = useState(THEMES[0]);
    const [descriptionCol, setDescriptionCol] = useState('');
    const [nameOption, setNameOption] = useState('');
    const [typeOption, setTypeOption] = useState(TYPES[0]);
    const [groupOptions, setGroupOptions] = useState([]);

    const setOptions = () => {
        setGroupOptions([...groupOptions, { name: splitValue(nameOption.trim()), type: typeOption }]);
        setNameOption('');
        setTypeOption(TYPES[0]);
        setShow(false);
    }

    const saveSetting = () => {
        const newCollection = {
            idUser: checkUserId,
            image: "img",
            collectionName: nameCol,
            theme : themeCol,
            description : descriptionCol,
            settings : groupOptions
        };

        dispatch(addCollection(newCollection));
        navigate(-1);
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
                                <InputMemo 
                                    type="text" 
                                    placeholder="Collection Name"
                                    value={nameCol}
                                    onChange={ (e) => setNameCol(e.target.value) }
                                />
                                <Form.Select 
                                    aria-label="Default select example" 
                                    value={themeCol}
                                    onChange={ (e) => setThemeCol(e.target.value) }
                                >
                                    {
                                        THEMES.map((it, idx) => (
                                            <option key={idx} value={it}>{it}</option>
                                        ))
                                    }
                                </Form.Select>
                            </div>
                            <InputMemo 
                                as="textarea" 
                                rows={3} 
                                value={descriptionCol}
                                onChange={ (e) => setDescriptionCol(e.target.value) } 
                            />

                            <span>Setting items in your collection:</span>

                            <div className="d-grid gap-2">
                                <Button variant="light" onClick={() => setShow(true)}> 
                                    + 
                                </Button>
                                <ModalWindow 
                                    show={show} 
                                    setShow={setShow} 
                                    onClick={setOptions}
                                    valid={validButton(nameOption)}
                                >
                                    <div className='d-flex gap-5'>
                                        <InputMemo 
                                            type="text"
                                            placeholder="Name"
                                            value={nameOption}
                                            onChange={ (e) => setNameOption(e.target.value) }
                                        />
                                        <Form.Select 
                                            aria-label="Default select example"
                                            value={typeOption}
                                            onChange={ (e) => setTypeOption(e.target.value) }
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
                                    groupOptions.map((it, idx) => (
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
                                <Button 
                                    variant="primary" 
                                    size="lg" 
                                    onClick={() => saveSetting()}
                                    disabled={nameCol && nameCol.trim() && groupOptions.length > 0 ? '' : 'disabled'}
                                >
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
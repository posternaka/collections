import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { updateCollection } from '../../../rest/collection';

import { theme, options } from '../../../types/theme'; 

const ViewCard = ({ collection, setIsEdit }) => {
    const [newName, setNewName] = useState(collection.collectionName);
    const [newTheme, setNewTheme] = useState(collection.theme);
    const [newDesc, setNewDesc] = useState(collection.description);
    const [newSettings, setNewSettings] = useState([]);
    const [modalName, setModalName] = useState('');
    const [modalType, setModalType] = useState('checkbox');

    const jsonDate = JSON.parse(collection.settings);

    const update = () => {
        setIsEdit(false);

        console.log(modalName, modalType);
        setNewSettings([...newSettings, { name: modalName, type: modalType, orders: newSettings.length + 1 }]);
        console.log(newSettings);
        updateCollection({ id: collection.id, newName, newTheme, newDesc, newSettings })
    }

    return (
        <>
            <Card.Img variant="top" src="https://via.placeholder.com/110x100/09f.png/fff" />
            <Card.Body className='d-flex flex-column gap-1'>
                <div className='d-flex justify-content-between gap-1'>
                    <Form.Control 
                        type="text" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)} 
                    />
                    <Form.Select aria-label={collection.theme} defaultValue={collection.theme} onChange={(e) => setNewTheme(e.target.value)}>
                        {
                            theme.map((it, idx) => (
                                <option key={idx} value={it}>{it}</option>
                            ))
                        }
                    </Form.Select>
                </div>
                <Form.Control
                    type="text" 
                    value={newDesc} 
                    onChange={(e) => setNewDesc(e.target.value)} 
                />
                <span>Settings:</span>
                {
                    jsonDate.map(it => (
                        <div className='d-flex justify-content-between gap-1'>
                            <Form.Control 
                                type="text" 
                                defaultValue={it.name} 
                                onChange={(e) => setModalName(e.target.value)} 
                            />
                            <Form.Select aria-label={it.type} defaultValue={it.type} onChange={(e) => setModalType(e.target.value)}>
                                {
                                    options.map((it, idx) => (
                                        <option key={idx} value={it}>{it}</option>
                                    ))
                                }
                            </Form.Select>
                        </div>
                    ))
                }
                <div className='d-flex justify-content-end flex-row'>
                    <Button variant="outline-warning" size="sm" onClick={() => update()}>
                        Save
                    </Button>
                </div>
            </Card.Body>
        </>
    )
}

export default ViewCard
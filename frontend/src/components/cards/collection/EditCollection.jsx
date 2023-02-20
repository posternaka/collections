import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { updateCollection } from '../../../rest/collection';

import { theme, options } from '../../../types/theme'; 

const ViewCard = ({ collection, setIsEdit }) => {
    const jsonData = JSON.parse(collection.settings);

    const [newName, setNewName] = useState(collection.collectionName);
    const [newTheme, setNewTheme] = useState(collection.theme);
    const [newDesc, setNewDesc] = useState(collection.description);
    const [newSettings, setNewSettings] = useState(jsonData);

    const handleNewSettingsName = (id, name) => {
        setNewSettings(prevState => 
          prevState.map(item => 
            item.orders === id 
              ? { ...item, name }
              : item
          )
        )
    }

    // const handleNewSettingsType = (id, type) => {
    //     setNewSettings(prevState => 
    //       prevState.map(item => 
    //         item.orders === id 
    //           ? { ...item, type }
    //           : item
    //       )
    //     )
    // }

    const updateSettings = () => {
        setIsEdit(false);
        updateCollection({ id: collection.id, newName, newTheme, newDesc, newSettings });
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
                <Button variant="light">+</Button>
                {
                    jsonData.map(it => (
                        <div key={it.orders} className='d-flex justify-content-between align-items-center gap-1'>
                            <Form.Control 
                                className="w-50"
                                type="text" 
                                defaultValue={it.name} 
                                onChange={(e) => handleNewSettingsName(it.orders, e.target.value)}
                            />
                            <span className='opacity-50'>(type: {it.type})</span>
                            {/* <Form.Select aria-label={it.type} defaultValue={it.type} onChange={(e) => handleNewSettingsType(it.orders, e.target.value)}>
                                {
                                    options.map((it, idx) => (
                                        <option key={idx} value={it}>{it}</option>
                                    ))
                                }
                            </Form.Select> */}
                        </div>
                    ))
                }
                <div className='d-flex justify-content-end flex-row gap-1'>
                    <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(false)}>
                        &#9650;
                    </Button>
                    <Button variant="outline-warning" size="sm" onClick={() => updateSettings()}>
                        Save
                    </Button>
                </div>
            </Card.Body>
        </>
    )
}

export default ViewCard
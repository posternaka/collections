import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { updateCollection } from '../../rest/collection';

const ViewCard = ({ collection, setIsEdit }) => {
    const [newName, setNewName] = useState(collection.collectionName);
    const [newTheme, setNewTheme] = useState(collection.theme);
    const [newDesc, setNewDesc] = useState(collection.description);

    console.log(collection);

    const update = () => {
        setIsEdit(false);

        updateCollection({ id: collection.id, newName, newTheme, newDesc })
    }

    return (
        <>
            <Card.Img variant="top" src="https://via.placeholder.com/110x100/09f.png/fff" />
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <Card.Title>
                        <Form.Control 
                            type="text" 
                            value={newName} 
                            onChange={(e) => setNewName(e.target.value)} 
                        />
                    </Card.Title>
                    <Form.Select aria-label="Default select example" onChange={(e) => setNewTheme(e.target.value)}>
                        <option value="Book">Book</option>
                        <option value="Movie">Movie</option>
                        <option value="Games">Games</option>
                    </Form.Select>
                    <Card.Text className='opacity-50'>{ collection.theme }</Card.Text>
                </div>
                <Card.Text>
                    <Form.Control 
                            type="text" 
                            value={newDesc} 
                            onChange={(e) => setNewDesc(e.target.value)} 
                        />
                </Card.Text>
                <div className='d-flex justify-content-end flex-row gap-2'>
                    <Button variant="outline-warning" size="sm" onClick={() => update()}>
                        Save
                    </Button>
                </div>
            </Card.Body>
        </>
    )
}

export default ViewCard
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { deleteCollection } from '../../rest/collection';

const ViewCard = ({ collection, setIsEdit }) => {
    return (
        <>
            <Card.Img variant="top" src="https://via.placeholder.com/110x100/09f.png/fff" />
            <Card.Body>
                <Link to='/item' className='text-decoration-none text-reset'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{ collection.collectionName }</Card.Title>
                        <Card.Text className='opacity-50'>{ collection.theme }</Card.Text>
                    </div>
                    <Card.Text>
                        { collection.description }
                    </Card.Text>
                </Link>
                <div className='d-flex justify-content-end flex-row gap-2'>
                    <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)}>
                        Edit 
                    </Button>
                    <Button variant="outline-danger" size="sm" onClick={() => deleteCollection(collection.id)}>
                        Delete
                    </Button>
                </div>
            </Card.Body>
        </>
    )
}

export default ViewCard
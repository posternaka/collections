import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { deleteCollection } from '../../../redux/collection/asyncAction';

import { Card, Button } from 'react-bootstrap';

const ViewCard = ({ collection, setIsEdit }) => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    return (
        <>
            <Card.Img variant="top" src="https://via.placeholder.com/110x100/09f.png/fff" />
            <Card.Body>
                <Link to={`/collection/${collection.id}`} className='text-decoration-none text-reset'>
                    <div className='d-flex justify-content-between'>
                        <Card.Title>{ collection.collectionName }</Card.Title>
                        <Card.Text className='opacity-50'>{ collection.theme }</Card.Text>
                    </div>
                    <Card.Text>
                        { collection.description }
                    </Card.Text>
                </Link>
                    {
                        pathname === '/'
                            ? ''
                            :   <div className='d-flex justify-content-end flex-row gap-2'>
                                    <Button variant="outline-warning" size="sm" onClick={() => setIsEdit(true)}>
                                        Edit 
                                    </Button>
                                    <Button variant="outline-danger" size="sm" onClick={() => dispatch(deleteCollection(collection.id))}>
                                        Delete
                                    </Button>
                                </div>
                    }
            </Card.Body>
        </>
    )
}

export default ViewCard
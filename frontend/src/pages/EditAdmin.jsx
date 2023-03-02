import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getUserCollections } from '../redux/collection/asyncAction';

import { Container, Row } from 'react-bootstrap';
import CollectionCard from '../components/cards/collection/CollectionCard';

const EditAdmin = ({ user, isAdmin }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const collections = useSelector(state => state.collection.userCollections);

    useEffect(() => {
        dispatch(getUserCollections(id));
    }, []);

    const link = isAdmin ? `/add_collection?userId=${id}` : `/add_collection`;

    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-3 mb-3">
                <Link to={link} className='text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                    <p className='display-1'>+</p>
                    <p>add new collection</p>
                </Link>
                {
                    collections.map((collection) => (
                        <CollectionCard key={collection.id} collection={collection} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default EditAdmin;
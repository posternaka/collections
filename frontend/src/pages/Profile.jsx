import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserCollections } from '../redux/collection/asyncAction';

import { Container, Row } from 'react-bootstrap';
import CollectionCard from '../components/cards/collection/CollectionCard';
import Spinner from '../components/UI/spinner/Spinner';

const Profile = () => {
    const dispatch = useDispatch();  
    const user = useSelector(state => state.user.user);
    const collections = useSelector(state => state.collection.userCollections);
    const status = useSelector(state => state.collection.status);

    useEffect(() => {
        dispatch(getUserCollections(user.id));
    }, []);

    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-3 mb-3">
                <Link 
                    to='/add_collection' 
                    className='text-decoration-none d-flex flex-column justify-content-center align-items-center'
                >
                    <p className='display-1'>+</p>
                    <p>add new collection</p>
                </Link>
                {
                    collections.map((collection) => (
                        status === 'loading' 
                            ? <div key={collection.id} className='mx-auto d-flex justify-content-center'><Spinner /></div>
                            : <CollectionCard key={collection.id} collection={collection} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Profile;
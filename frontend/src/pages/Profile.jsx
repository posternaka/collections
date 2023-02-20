import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { getCollections } from '../rest/collection';

import CollectionCard from '../components/cards/collection/CollectionCard';

const Profile = ({ user }) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        dataCollections();
    }, []);

    const dataCollections = async () => {
        const result = await getCollections(user.id);
        setCollections(result);
    }

    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-3 mb-3">
                <Link to='/add_collection' className='text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                    <p className='display-1'>+</p>
                    <p>add new collection</p>
                </Link>
                {
                    collections.map((it, idx) => (
                        <CollectionCard key={it.id} collection={it} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Profile;
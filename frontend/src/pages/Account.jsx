import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { getCollection } from '../rest/collection';

import ViewCard from '../components/cards/collection/ViewCard';

const Account = ({ user }) => {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        dataCollections();
    }, []);

    const dataCollections = async() => {
        const result = await getCollection(user.id);
        setCollections(result);
    }

    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-3 mb-3">
                <Link to='/edit_collection' className='text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                    <p className='display-1'>+</p>
                    <p>add new collection</p>
                </Link>
                {
                    collections.map((it, idx) => (
                        <ViewCard key={it.id} collection={it} />
                    ))
                }
            </Row>
        </Container>
    )
}

export default Account
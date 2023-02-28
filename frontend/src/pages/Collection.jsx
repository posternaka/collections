import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCollectionItems } from '../redux/item/asyncAction';
import { getCollection } from '../redux/collection/asyncAction';

import ItemCard from '../components/cards/item/ItemCard';

const Collection = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const items = useSelector(state => state.item.collectionItems);
    
    useEffect(() => {
        dispatch(getCollectionItems(id));
        dispatch(getCollection(id));
    }, []);

    return (
        <Container>
            <Link to='/add_item' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
                <span className='display-1'>+</span>
                <p>add new item</p>
            </Link>
                {
                    items.map(item => (
                        <ItemCard key={item.id} item={item} />
                    ))
                }
        </Container>
    )
}

export default Collection;
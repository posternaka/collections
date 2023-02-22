import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getCollection } from '../rest/collection';
import { getItems } from '../rest/item';
import { useDispatch, useSelector } from 'react-redux';
import { setCollection, setItems } from '../redux/item/ItemSlice';

import ItemCard from '../components/cards/item/ItemCard';

const Item = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const collection = useSelector(state => state.item.collection);
    const items = useSelector(state => state.item.items);

    useEffect(() => {
        getDataCollection(id);
        getDataItems(id);
    }, []);

    const getDataCollection = async (id) => {
        const result = await getCollection(id);
        dispatch(setCollection(result));
    };

    const getDataItems = async (id) => {
        const result = await getItems(id);
        dispatch(setItems(result));
    };


    return (
        <Container>
        <Link to='/add_item' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
            <span className='display-1'>+</span>
            <p>add new item</p>
        </Link>
            {
                items.map(it => (
                    <ItemCard key={it.id} item={it} sets={collection.settings} />
                ))
            }
        </Container>
    )
}

export default Item;
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getCollection } from '../rest/collection';
import { getItems } from '../rest/item';
import { getCollectionTags } from '../rest/tag';
import { useDispatch, useSelector } from 'react-redux';
import { setCollection, setItems } from '../redux/item/ItemSlice';
import { setTagsDB } from '../redux/tag/tagSlice';

import ItemCard from '../components/cards/item/ItemCard';

const Item = ({ username }) => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const collection = useSelector(state => state.item.collection);
    const items = useSelector(state => state.item.items);
    const tagsDB = useSelector(state => state.tag.tagsDB);


    useEffect(() => {
        getDataCollection(id);
        getDataItems(id);
        getDataTagsDb(id);
    }, []);

    const getDataCollection = async (id) => {
        const result = await getCollection(id);
        dispatch(setCollection(result));
    };

    const getDataItems = async (id) => {
        const result = await getItems(id);
        dispatch(setItems(result));
    };
    
    const getDataTagsDb = async (id) => {
        const result = await getCollectionTags(id);
        dispatch(setTagsDB(result));
    };

    return (
        <Container>
        <Link to='/add_item' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
            <span className='display-1'>+</span>
            <p>add new item</p>
        </Link>
            {
                items.map(it => (
                    <ItemCard key={it.id} username={username} item={it} sets={collection.settings} tags={tagsDB} />
                ))
            }
        </Container>
    )
}

export default Item;
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { getCollection } from '../rest/collection';
import { useDispatch, useSelector } from 'react-redux';
import { setCollection } from '../redux/item/ItemSlice';

import ReadItem from '../components/cards/item/ReadItem';
import EditItem from '../components/cards/item/EditItem'

const Item = () => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        getDataCollection();
    }, []);

    const getDataCollection = async () => {
        const result = await getCollection(id);
        dispatch(setCollection(result));
    };


    return (
        <Container>
        <Link to='/add_item' className='my-3 text-decoration-none d-flex flex-column justify-content-center align-items-center'>
            <span className='display-1'>+</span>
            <p>add new item</p>
        </Link>
            {
                isEdit 
                        ? <EditItem setIsEdit={setIsEdit} /> 
                        : <ReadItem setIsEdit={setIsEdit} />
            }
        </Container>
    )
}

export default Item;
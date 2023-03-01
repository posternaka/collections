import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItemTags } from '../../../redux/tag/asyncAction';


import EditItem from './EditItem';
import ReadItem from './ReadItem';

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        dispatch(getItemTags(item.id));
    }, []);

    return (
        <>
            { 
                isEdit 
                    ? <EditItem item={item} setIsEdit={setIsEdit} /> 
                    : <ReadItem item={item} setIsEdit={setIsEdit} /> 
            }
        </>
    )
}

export default ItemCard;
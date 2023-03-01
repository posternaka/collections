import { useState } from 'react';

import EditItem from './EditItem';
import ReadItem from './ReadItem';

const ItemCard = ({ item }) => {
    const [isEdit, setIsEdit] = useState(false);

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
import { useState } from 'react';

import EditItem from './EditItem';
import ReadItem from './ReadItem';

const ItemCard = ({ item, sets }) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            { 
                isEdit 
                    ? <EditItem item={item} sets={sets} setIsEdit={setIsEdit} /> 
                    : <ReadItem item={item} sets={sets} setIsEdit={setIsEdit} /> 
            }
        </>
    )
}

export default ItemCard;
import { useState } from 'react';

import EditItem from './EditItem';
import ReadItem from './ReadItem';

const ItemCard = ({ username, item, sets, tags }) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            { 
                isEdit 
                    ? <EditItem item={item} sets={sets} tags={tags} setIsEdit={setIsEdit} /> 
                    : <ReadItem username={username} item={item} sets={sets} tags={tags} setIsEdit={setIsEdit} /> 
            }
        </>
    )
}

export default ItemCard;
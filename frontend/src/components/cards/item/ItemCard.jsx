import { useState } from 'react';

import EditItem from './EditItem';
import ReadItem from './ReadItem';

const ItemCard = () => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            { 
                isEdit 
                    ? <EditItem setIsEdit={setIsEdit} /> 
                    : <ReadItem setIsEdit={setIsEdit} /> 
            }
        </>
    )
}

export default ItemCard;
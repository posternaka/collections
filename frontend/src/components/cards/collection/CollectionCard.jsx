import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

import EditCollection from './EditCollection';
import ReadCollection from './ReadCollection';

const CollectionCard = ({ collection }) => {
    const [isEdit, setIsEdit] = useState(false);

    return (
        <Col>
            <Card className='shadow'>
                { 
                    isEdit 
                        ? <EditCollection collection={collection} setIsEdit={setIsEdit} /> 
                        : <ReadCollection collection={collection} setIsEdit={setIsEdit} /> 
                }
            </Card>
        </Col>
    )
}

export default CollectionCard;
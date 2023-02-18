import { useState } from 'react';
import { Col, Card } from 'react-bootstrap';

import EditCard from './EditCard';
import ReadCard from './ReadCard';

const ViewCard = ({ collection }) => {
    const [isEdit, setIsEdit] = useState(false);
    console.log(isEdit);

    return (
        <Col>
            <Card className='shadow'>
                { 
                    isEdit 
                        ? <EditCard collection={collection} setIsEdit={setIsEdit} /> 
                        : <ReadCard collection={collection} setIsEdit={setIsEdit} /> 
                }
            </Card>
        </Col>
    )
}

export default ViewCard
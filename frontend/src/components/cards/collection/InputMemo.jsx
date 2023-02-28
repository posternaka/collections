import { Form } from 'react-bootstrap';
import { memo } from 'react';

const InputMemo = ({ type, value, onChange}) => {
  return (
    <Form.Control
        type={type}
        value={value} 
        onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default memo(InputMemo);
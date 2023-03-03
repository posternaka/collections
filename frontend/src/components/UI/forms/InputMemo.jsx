import { memo } from 'react';
import { Form } from 'react-bootstrap';

const InputMemo = (params) => {
  return (
    <Form.Control
        {...params}
    />
  )
}

export default memo(InputMemo);
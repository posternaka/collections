import { memo } from 'react';
import { Form } from 'react-bootstrap';

const SelectMemo = (params, children) => {
  console.log(children);
  return (
    <Form.Select
        {...params}
    >
      {children}
    </Form.Select>
  )
}

export default memo(SelectMemo);
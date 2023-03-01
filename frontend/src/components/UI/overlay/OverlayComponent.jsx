import { useState, useEffect, useRef } from 'react';
import { Form, Button, Badge, Overlay, Popover } from 'react-bootstrap';

const OverlayComponent = ({ tags, tagValue, setTagValue, addTag }) => {
  const [target, setTarget] = useState(null);
  const [show, setShow] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
        const handleClickOut = (e) => {
        if(inputRef.current && !e.composedPath().includes(inputRef.current)) {
            setShow(false);
        } 
        };

        document.body.addEventListener('click', handleClickOut);

        return () => {
            document.body.removeEventListener('click', handleClickOut);
        };
    }, []);

  const result = tagValue.length > 0 ? tags.filter(tag => tag.tag.includes(tagValue)) : '';

  const handleClick = (e) => {
      setShow(true);
      setTarget(e.target);
  };

  const handleClose = (tag) => {
      setTagValue(tag);
      setShow(false);
  }

  return (
    <div className='d-flex gap-2'>
      {
        tagValue.length > 0 &&
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <Popover.Body role="button" className='d-flex gap-1 align-items-center'>
                        {
                            result &&
                                result.map(it => (
                                    <Badge pill bg="primary" onClick={() => handleClose(it.tag)}>
                                        #{it.tag}
                                    </Badge>
                                ))
                        }
                    </Popover.Body>
                </Popover>
            </Overlay>
      }
      <Form.Control 
          ref={inputRef}
          className='w-25' 
          type="text" 
          placeholder="add tag" 
          value={tagValue} 
          onChange={(e) => setTagValue(e.target.value)} 
          onClick={handleClick}
      />
      <Button onClick={() => addTag()}>+</Button>
    </div>
  )
}

export default OverlayComponent;
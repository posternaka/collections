import { Button, Modal} from 'react-bootstrap';

const ModalWindow = ({ show, setShow, handleSetJson, children }) => {
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add field to your item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                { children }
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSetJson}>
                    Save Changes
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalWindow
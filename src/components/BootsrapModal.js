import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';


function BootsrapModal({email, name, phone, formEl, outShow}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    return (
        <Modal show={outShow} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>formEl:{formEl}</div>
                <div>Name:{name}</div>
                <div>email: {email}</div>
                <div>phone: {phone}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>

    );
}

export default BootsrapModal;

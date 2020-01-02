import React, {useRef, useState, inputRef, useEffect} from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import BootsrapModal from './BootsrapModal';
import Modal from "react-bootstrap/Modal";


const UserForm = () => {
    const [submited, setSubmited] = useState(false);
    const [formData, setFormData] = useState( {email:'', name: '', phone: ''});
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const nameInpRef = useRef();
    const emailInpRef = useRef();
    const phoneInpRef = useRef();
    let userFormData = {};

    const allTrue = (obj) => {
        for (let o in obj) {
            if (obj.hasOwnProperty(o) && obj[o] !== true) {
                return false;
            }
        }
        return true;
    };

    const validateInputData = (name, email, phone) => {
        console.log('!isNaN ->', phone, '--', !isNaN(phone));
        const validObj = {
            name: !!name ? true : 'Input valid name',
            email: !!email ? true : 'Input valid email',
            phone: !isNaN(phone) ? true : 'Input valid phone'
        };
        console.log('!validObj ->', validObj);
        let valid;

        if (allTrue(validObj)) {
            valid = true;
        } else {
            let res = [];
            for (let prop in validObj) {

                if (typeof validObj[prop] !== "boolean") {
                    res.push(validObj[prop]);
                    console.log('res->', res, '--', validObj[prop]);
                }
            }
            valid = res.concat();
        }
        console.log('validateInputData ->', valid);
        return valid;
    };


    const handleSubmit = (event) => {
        const email = emailInpRef.current.value;
        const name = nameInpRef.current.value;
        const phone = phoneInpRef.current.value;
        const validation = validateInputData(email, name, phone);
        // console.log(event);
        // console.log('emailInpRef ', emailInpRef.current.value);
        // console.log('nameInpRef ', nameInpRef.current.value);
        // console.log('phoneInpRef ', phoneInpRef.current.value);

        if (validation === true) {
            setFormData({email: email, name: name, phone: phone});
            userFormData = {email: email, name: name, phone: phone};
            console.log('!!!formData -> ', formData);
           // console.log('!!!userFormData -> ', userFormData);
            setShowModal(true);

        } else {
            console.log('validation-> ', validation);
            alert(validation);
        }

        event.preventDefault();
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h2>Input Your data</h2>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" ref={nameInpRef}/>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailInpRef}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Nunber</Form.Label>
                    <Form.Control type="text" placeholder="Phone Nunber" ref={phoneInpRef}/>
                </Form.Group>

                <Button variant="danger">
                    Cencel
                </Button>
                <Button variant="primary" type="submit">
                    Cencel
                </Button>

            </Form>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>Name:{formData.name}</div>
                    <div>email: {formData.email}</div>
                    <div>phone: {formData.phone}</div>
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
        </>
    )
};

export default UserForm;



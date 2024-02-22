import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

// Functional component representing the navigation bar
function Navbar() {

    const [show, setShow] = useState(false); // State to manage the visibility of the modal

    const handleShow = () => {
        setShow(true); // Function to show the modal
    }

    const handleClose = () => {
        setShow(false); // Function to close the modal
    }

    return (
        <div>
            {/* Links to different pages */}
            <Link to='/'>
                <Button variant="primary">Home</Button>{' '}
            </Link>
            <Link to='/blogs'>
                <Button variant="danger">Blogs</Button>{' '}
            </Link>
            <Link to='/settings'>
                <Button variant="success">Settings</Button>{' '}
            </Link>
            
            {/* Button to launch the modal */}
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            {/* Modal component */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Navbar; // Export the Navbar component

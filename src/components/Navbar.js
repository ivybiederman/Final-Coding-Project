import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap'

function Navbar() {

    const [show,setShow] = useState(false);

    const handleShow = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <div>
            <Link to='/'>
                <Button variant="primary">Home</Button>{' '}
            </Link>
            <Link to='/blogs'>
                <Button variant="danger">Blogs</Button>{' '}
            </Link>
            <Link to='/settings'>
                <Button variant="success">Settings</Button>{' '}
            </Link>
            
       
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
      </Button>

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
    )
}

export default Navbar
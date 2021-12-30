import React, { useState } from "react";
import AddList from "./addList";
import { Button, Modal, Form } from "react-bootstrap";

function AddName(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter Baby Name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Baby Name</Form.Label>
            <Form.Control type="text" placeholder="John Doe" />
          </Form.Group>
          <div className="d-flex">
            <div className="col-6">
              <Form.Select aria-label="Default select example">
                <option>Select List</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="col-2 d-flex justify-content-center align-items-center">
              <span>or</span>
            </div>
            <Button className="col-4" onClick={() => setModalShow(true)}>
              Create New List
            </Button>
            <AddList show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddName;

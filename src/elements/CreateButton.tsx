import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const CreateButton: React.FC<{
  heading: string;
  description: string;
  cancel: string;
  confirm: string;
}> = ({ heading, description, cancel, confirm }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="create-button d-flex justify-content-end">
      {" "}
      <Button className="btn btn-primary" onClick={handleShow}>
        Create
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            {cancel}
          </Button>
          <Button variant="success" onClick={handleClose}>
            {confirm}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CreateButton;

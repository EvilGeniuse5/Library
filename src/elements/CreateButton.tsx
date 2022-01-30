import React from "react";
import { Button, Modal } from "react-bootstrap";
import { AlertCircle, CheckCircle } from "react-feather";

const CreateButton: React.FC<{
  heading: string;
  description: string;
  cancel: string;
  confirm: string;
  validation: boolean;
  onclick: () => void;
}> = ({ heading, description, cancel, confirm, onclick, validation }) => {
  const [show, setShow] = React.useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleItem = () => {
    if (validation) {
      onclick();
      setShow(false);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="create-button d-flex justify-content-end">
      {" "}
      <Button className="btn btn-primary" onClick={handleShow}>
        Create
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex gap-2 align-items-center">
            {!validation ? (
              <AlertCircle className="text-warning" />
            ) : (
              <CheckCircle className="text-success" />
            )}
            {" " + heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          {validation ? (
            <Button variant="danger" onClick={handleClose}>
              {" "}
              {cancel}{" "}
            </Button>
          ) : null}
          <Button
            variant={validation ? "success" : "danger"}
            onClick={handleItem}
          >
            {validation ? confirm : "Back"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default CreateButton;

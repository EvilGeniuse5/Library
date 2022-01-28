import { Edit, Trash2 } from "react-feather";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

const ListItem: React.FC<{
  id: number;
  title: string;
  type: string;
}> = ({ id, title, type }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var heading;
  var description;
  var cancel;
  var confirm;

  if (type == "book") {
    heading = "Delete Book";
    description = "Delete the book title";
    cancel = "Cancel";
    confirm = "Delete";
  } else if (type == "author") {
    heading = "Delete Author";
    description = "Delete the author name";
    cancel = "Cancel";
    confirm = "Delete";
  }

  return (
    <div className="list-item py-2">
      {id}.&nbsp;
      {title}
      <div className="list-item__settings">
        <Edit className="list-item__icon edit" />
        <Trash2 onClick={handleShow} className="list-item__icon trash" />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            {cancel}
          </Button>
          <Button variant="danger" onClick={handleClose}>
            {confirm}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ListItem;

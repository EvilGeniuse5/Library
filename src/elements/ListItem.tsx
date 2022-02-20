import React from 'react';
import { Edit, Trash2 } from 'react-feather';
import { Button, Modal } from 'react-bootstrap';

const ListItem: React.FC<{
	id: number;
	title: string;
	type: string;
	deleteOnClick: (id: number) => void;
	updateOnClick: (id: number, author: string) => void;
}> = ({ id, title, type, deleteOnClick, updateOnClick }) => {
	const [show, setShow] = React.useState<boolean>(false);
	const handleDelete = (id: number) => {
		deleteOnClick(id);
		setShow(false);
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	var heading;
	var description;
	var cancel;
	var confirm;

	if (type === 'book') {
		heading = 'Delete Book';
		description = 'Delete the book title';
		cancel = 'Cancel';
		confirm = 'Delete';
	} else if (type === 'author') {
		heading = 'Delete Author';
		description =
			'Are you sure you want to delete this author? This will permanently delete all the books written by this author.';
		cancel = 'Cancel';
		confirm = 'Delete';
	}

	return (
		<div className='list-item py-2'>
			{id + 1}.&nbsp;
			{title}
			<div className='list-item__settings'>
				<Edit
					onClick={() => updateOnClick(id, title)}
					className='list-item__icon  edit'
				/>
				<Trash2 onClick={handleShow} className='list-item__icon  trash' />
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{heading}</Modal.Title>
				</Modal.Header>
				<Modal.Body>{description}</Modal.Body>
				<Modal.Footer>
					<Button variant='success' onClick={handleClose}>
						{cancel}
					</Button>
					<Button variant='danger' onClick={() => handleDelete(id)}>
						{confirm}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};
export default ListItem;

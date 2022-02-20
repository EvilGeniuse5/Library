import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Plus } from 'react-feather';

const AddItem: React.FC<{
	title: string;
	onclick: () => void;
}> = ({ title, onclick }) => {
	return (
		<Row className='add-item' onClick={onclick}>
			<Col>
				<Plus className='add-item__plus' />
				{title}
			</Col>
		</Row>
	);
};
export default AddItem;

import React from 'react';
import { Col, Nav, Row } from 'react-bootstrap';

const Navbar: React.FC = () => {
	return (
		<Nav className='navbar justify-content-center py-3'>
			<Row>
				<Col>
					<h1>My Library</h1>
				</Col>
			</Row>
		</Nav>
	);
};

export default Navbar;

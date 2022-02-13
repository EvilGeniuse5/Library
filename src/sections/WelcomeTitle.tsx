import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const WelcomeTitle: React.FC = () => {
	return (
		<Navbar>
			<Container className='navbar justify-content-center py-3'>
				<Row>
					<Col>
						<h1>My Library</h1>
					</Col>
				</Row>
			</Container>
		</Navbar>
	);
};

export default WelcomeTitle;

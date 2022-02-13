import React from 'react';
import { Col, Container, Navbar, Row } from 'react-bootstrap';

const WelcomeTitle: React.FC = () => {
	return (
		<Navbar className='navbar'>
			<Container className='justify-content-center py-lg-1'>
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

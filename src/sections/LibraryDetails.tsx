import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorList from '../components/AuthorList';
import BookList from '../components/BookList';

const LibraryDetails: React.FC = () => (
	<Container fluid className='details px-2 px-md-3 px-lg-4 px-xl-5 '>
		<Row className='flex-column-reverse flex-lg-row justify-content-between gap-2 gap-lg-3 gap-xl-5'>
			<Col>
				<BookList />
			</Col>
			<Col>
				<AuthorList />
			</Col>
		</Row>
	</Container>
);

export default LibraryDetails;

import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const HeroSection: React.FC = () => {
	return (
		<Container fluid className='hero'>
			<Row>
				<Col className='hero__bg' />
			</Row>
			<Row className='hero__credits pe-md-2 pe-lg-4 pe-xl-5'>
				<Col className='pt-1 pe-2 pe-md-3 pe-lg-4 pe-xl-5'>
					{' '}
					<p className='text-end font-weight-medium'>
						Photo by{' '}
						<a
							target='_blank'
							rel='noreferrer'
							href='https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
						>
							Anna Hunko
						</a>{' '}
						on{' '}
						<a
							target='_blank'
							rel='noreferrer'
							href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
						>
							Unsplash
						</a>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default HeroSection;

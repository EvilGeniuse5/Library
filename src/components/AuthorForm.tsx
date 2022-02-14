import { XCircle } from 'react-feather';
import { validName } from '../types/Regex';
import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AuthorForm: React.FC<{
	className: string;
	onclick: () => void;
	createAuthor: (author: string) => void;
}> = ({ className, onclick, createAuthor }) => {
	const initialValues = { authorName: '' };
	const [authors, setAuthors] = useState(initialValues);
	const [authorErrors, setAuthorErrors] = useState({});
	const [isSubmit, setIsSubmit] = useState(false);

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setAuthors({ ...authors, [name]: value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setAuthorErrors(validate(authors));
		setIsSubmit(true);
	};

	useEffect(() => {
		console.log(authorErrors);
		if (Object.keys(authorErrors).length === 0 && isSubmit) {
			console.log(authors);
		}
	}, [authorErrors]);

	const validate = (values: any) => {
		const errors: any = {};
		if (!values.authorName) {
			errors.authorName = 'Author name is required';
		} else if (values.authorName.match(validName) === true) {
			errors.authorName = 'Author name is invalid';
		}
		return errors;
	};

	return (
		<Row className={'library-form ' + className}>
			<Col xs={12} xxl={8} className='library-form__form'>
				<div className='d-flex align-items-center justify-content-between mb-4'>
					<div className='library-form__title'>
						<h1>Create Author</h1>
						<hr />
					</div>
					<span onClick={onclick}>
						<XCircle className='library-form__xcircle' />
					</span>
				</div>
				<Row>
					<pre>{JSON.stringify(authors, undefined, 2)}</pre>

					<Form onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='text'
								name='authorName'
								value={authors.authorName}
								onChange={handleChange}
							/>
						</Form.Group>
						<Col className='create-button d-flex justify-content-end'>
							<Button
								type='submit'
								className='create-button__button btn btn-primary'
							>
								Create
							</Button>
						</Col>
					</Form>
				</Row>
			</Col>
		</Row>
	);
};

export default AuthorForm;

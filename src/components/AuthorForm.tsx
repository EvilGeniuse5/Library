import { XCircle } from 'react-feather';
import { validName } from '../types/Regex';
import React, { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const AuthorForm: React.FC<{
	className: string;
	onclick: () => void;
	authorList: Array<string>;
	createAuthor: (author: string) => void;
}> = ({ className, onclick, createAuthor, authorList }) => {
	const initialValues = { authorName: '' };
	const [authors, setAuthors] = useState(initialValues);
	const [authorErrors, setAuthorErrors] = useState({ authorName: '' });
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
		if (Object.keys(authorErrors).length === 0 && isSubmit) {
			createAuthor(authors.authorName);
			setAuthors(initialValues);
		}
	}, [authorErrors]);

	const validate = (values: any) => {
		const errors: any = {};
		if (!values.authorName) {
			errors.authorName = 'Author name is required';
		} else if (!validName.test(values.authorName)) {
			errors.authorName = 'Author name is invalid';
		} else if (authorList.includes(values.authorName)) {
			errors.authorName = 'Author name already exists';
		}
		return errors;
	};

	return (
		<Row className={'library-form ' + className}>
			<Col xs={12} xxl={9} className='library-form__form ps-lg-0 pe-lg-5 '>
				<Row>
					<div className='d-flex align-items-center justify-content-between my-4 px-0'>
						<div className='library-form__title'>
							<h1>Create Author</h1>
							<hr />
						</div>
						<span onClick={onclick}>
							<XCircle className='library-form__xcircle' />
						</span>
					</div>
				</Row>

				<Row>
					<Form onSubmit={handleSubmit} className='p-0 my-0'>
						<Form.Group className='ms-lg-5 my-2'>
							<Form.Label className='mb-1 library-form__input-title'>
								Name of Author
							</Form.Label>
							<Form.Control
								type='text'
								name='authorName'
								value={authors.authorName}
								onChange={handleChange}
								style={{
									borderColor: authorErrors.authorName ? '#dc3545' : '',
								}}
							/>
							<Form.Control.Feedback
								type='invalid'
								style={{
									display: authorErrors.authorName ? 'block' : 'none',
									fontWeight: 500,
								}}
							>
								{authorErrors.authorName}
							</Form.Control.Feedback>
						</Form.Group>
						<Col className='create-button d-flex justify-content-end'>
							<Button
								type='submit'
								className='create-button__button btn btn-primary mt-4'
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

import React from 'react';
import AddItem from '../elements/AddItem';
import AuthorForm from './AuthorForm';
import ListItem from '../elements/ListItem';
import { Col, Row } from 'react-bootstrap';

const AuthorList: React.FC = () => {
	const [visibility, setVisibility] = React.useState<boolean>(false);
	const [authors, setAuthors] = React.useState<Array<string>>([]);

	const removeAuthor = (index: number) => {
		const newAuthors = [...authors];
		newAuthors.splice(index, 1);
		setAuthors(newAuthors);
	};

	const createAuthor = (author: string) => {
		if (author === '') {
			alert('Please enter an author name');
			return;
		}
		const newAuthors = [...authors, author];
		setAuthors(newAuthors);
	};

	const handleFormVisibility = () => {
		setVisibility(true);
	};

	const handleOnClose = () => {
		setVisibility(false);
	};

	var className: string = visibility
		? 'author-form'
		: 'author-form visibility-hidden';

	return (
		<Row className='list'>
			<Col xs={12}>
				<h1>Authors</h1>
				<hr className='title-hr' />

				{authors.length === 0 ? (
					<p className='list-empty'>
						<i>No authors listed here.</i>
					</p>
				) : null}
				<ul className='list-group'>
					{authors.map((author: string, index: number) => (
						<li key={index}>
							{' '}
							<ListItem
								id={index}
								title={author}
								onclick={() => removeAuthor(index)}
								type='author'
							/>
						</li>
					))}
				</ul>
			</Col>
			<Col xs={12}>
				<AddItem title='Add Author' onclick={handleFormVisibility} />
				<AuthorForm
					className={className}
					onclick={handleOnClose}
					authorList={authors}
					createAuthor={(author: string) => createAuthor(author)}
				/>
			</Col>
		</Row>
	);
};

export default AuthorList;

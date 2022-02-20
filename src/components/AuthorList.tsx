import React from 'react';
import AddItem from '../elements/AddItem';
import AuthorForm from './AuthorForm';
import ListItem from '../elements/ListItem';
import { Col, Row } from 'react-bootstrap';
import { IAuthor } from '../types/Library';

const AuthorList: React.FC<{
	authorList: IAuthor[];
	removeAuthor: (index: number) => void;
	addAuthor: (author: string) => void;
}> = ({ authorList, removeAuthor, addAuthor }) => {
	const [visibility, setVisibility] = React.useState<boolean>(false);
	const [status, setStatus] = React.useState<string>('Create');

	const handleFormVisibility = () => {
		setStatus('Create');
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

				{authorList.length === 0 ? (
					<p className='list-empty'>
						<i>No authors listed here.</i>
					</p>
				) : null}
				<ul className='list-group'>
					{authorList.map((author: IAuthor, index: number) => (
						<li key={index}>
							{' '}
							<ListItem
								id={index}
								title={author.name}
								updateOnClick={() => undefined}
								deleteOnClick={() => removeAuthor(author.id)}
								type='author'
							/>
						</li>
					))}
				</ul>
			</Col>

			<Col xs={12}>
				<AddItem title='Add Author' onclick={handleFormVisibility} />
				<AuthorForm
					title={status}
					className={className}
					onclick={handleOnClose}
					authorList={authorList.map((author: IAuthor) => author.name)}
					createAuthor={(author: string) => addAuthor(author)}
				/>
			</Col>
		</Row>
	);
};

export default AuthorList;

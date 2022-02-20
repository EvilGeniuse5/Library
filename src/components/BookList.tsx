import React from 'react';
import AddItem from '../elements/AddItem';
import ListItem from '../elements/ListItem';
import { IAuthor, IBook } from '../types/Library';
import BookForm from './BookForm';

const BookList: React.FC<{
	authorList: IAuthor[];
	removeBook: (index: number) => void;
	addBook: (author: IBook) => void;
}> = () => {
	const [visibility, setVisibility] = React.useState<boolean>(false);

	const handleFormVisibility = () => {
		setVisibility(true);
	};

	const handleOnClose = () => {
		setVisibility(false);
	};

	var className: string = visibility
		? 'book-form'
		: 'book-form visibility-hidden';

	return (
		<div className='list'>
			<h1>Books</h1>
			<hr className='title-hr' />
			<ul className='list-group'></ul>
			<AddItem title='Add Book' onclick={handleFormVisibility} />
			<BookForm className={className} onclick={handleOnClose} />
		</div>
	);
};
export default BookList;

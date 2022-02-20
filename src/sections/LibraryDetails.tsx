import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthorList from '../components/AuthorList';
import BookList from '../components/BookList';
import { IAuthor, IBook } from '../types/Library';

const LibraryDetails: React.FC = () => {
	const [authors, setAuthors] = React.useState<IAuthor[]>([
		{ id: 1, name: 'J.K. Rowling' },
		{ id: 2, name: 'J.R.R. Tolkien' },
		{ id: 3, name: 'Stephen King' },
	]);

	const [books, setBooks] = React.useState<IBook[]>([]);

	const handleCreateBook = (book: IBook) => {
		setBooks([...books, book]);
	};

	const handleRemoveBook = (index: number) => {
		setBooks(books.filter((book: IBook, i: number) => i !== index));
	};

	const handleCreateAuthor = (author: string) => {
		const newAuthor: IAuthor = {
			id: authors.length + 1,
			name: author,
		};
		setAuthors([...authors, newAuthor]);
	};

	const handleRemoveAuthor = (id: number) => {
		const newAuthors = authors.filter((author: IAuthor) => author.id !== id);
		setAuthors(newAuthors);
	};

	return (
		<Container fluid className='details px-2 px-md-3 px-lg-4 px-xl-5 '>
			<Row className='flex-column-reverse flex-lg-row justify-content-between gap-2 gap-lg-3 gap-xl-5'>
				<Col>
					<BookList
						authorList={authors}
						addBook={(book: IBook) => handleCreateBook(book)}
						removeBook={(index: number) => handleRemoveBook(index)}
					/>
				</Col>
				<Col>
					<AuthorList
						authorList={authors}
						removeAuthor={(index: number) => handleRemoveAuthor(index)}
						addAuthor={(author: string) => handleCreateAuthor(author)}
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default LibraryDetails;

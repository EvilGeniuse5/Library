import AddItem from "../elements/AddItem";
import BookForm from "./BookForm";
import ListItem from "../elements/ListItem";
import React from "react";

const BookList: React.FC<{authorList: any}>= (authorList) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  const [books, setBooks] = React.useState<Array<string>>([]);

  const removeBook = (index: number) => {
    const newBooks = [...books];
    newBooks.splice(index, 1);
    setBooks(newBooks);
  };

  const createBook = (book: string) => {
    if (book === "") {
      alert("Please enter an book name");
      return;
    }
    const newBooks = [...books, book];
    setBooks(newBooks);
  };

  const handleFormVisibility = () => {
    setVisibility(true);
  };

  const handleOnClose = () => {
    setVisibility(false);
  };

  var className: string = visibility
    ? "book-form"
    : "book-form visibility-hidden";

  return (
    <div className="list">
      <h1>Books</h1>
      <hr className="title-hr" />

      {books.length === 0 ? (
        <p className="list-empty">
          <i>No books listed here.</i>
        </p>
      ) : null}
      <ul className="list-group">
        {books.map((book: string, index: number) => (
          <li key={index}>
            {" "}
            <ListItem
              id={index}
              title={book}
              onclick={() => removeBook(index)}
              type="book"
            />
          </li>
        ))}
      </ul>
      <AddItem title="Add Book" onclick={handleFormVisibility} />
      <BookForm
        className={className}
        onclick={handleOnClose}
        authorList={authorList}
        createBook={(book: string) => createBook(book)}
      />

    </div>
  );
};
export default BookList;
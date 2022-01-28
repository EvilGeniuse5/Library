import { useState } from "react";
import AddItem from "../elements/AddItem";
import ListItem from "../elements/ListItem";
import BookForm from "./BookForm";
const BookList: React.FC = () => {
  const [visibility, setVisibility] = useState(false);

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
      <ul className="list-group">
        <li>
          <ListItem id={1} title="Book 1 title" type="book" />
        </li>
        <li>
          <ListItem id={2} title="Book 2 title" type="book" />
        </li>
        <li>
          <ListItem id={3} title="Book 3 title" type="book" />
        </li>
        <li>
          <ListItem id={4} title="Book 4 title" type="book" />
        </li>
      </ul>
      <AddItem title="Add Book" onclick={handleFormVisibility} />
      <BookForm className={className} onclick={handleOnClose} />
    </div>
  );
};
export default BookList;

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
      <hr />
      <ul className="list-group">
        <li>
          <ListItem id={1} author="Book 1 title" />
        </li>
        <li>
          <ListItem id={2} author="Book 2 title" />
        </li>
        <li>
          <ListItem id={3} author="Book 3 title" />
        </li>
        <li>
          <ListItem id={4} author="Book 4 title" />
        </li>
      </ul>
      <AddItem title="Add Book" onclick={handleFormVisibility} />
      <BookForm className={className} onclick={handleOnClose} />
    </div>
  );
};
export default BookList;

import AddItem from "../elements/AddItem";
import ListItem from "../elements/ListItem";
import BookForm from "./BookForm";
const BookList: React.FC = () => (
  <div>
    <h1>Books</h1>
    <ul className="list-group">
      <li>
        <ListItem id={1} author="Brian" />
      </li>
      <li>
        <ListItem id={2} author="James" />
      </li>
    </ul>
    <AddItem />
    <BookForm />
  </div>
);
export default BookList;

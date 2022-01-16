import AddItem from "../elements/AddItem";
import ListItem from "../elements/ListItem";
import BookForm from "./BookForm";
const BookList: React.FC = () => (
  <div>
    <h1>Books</h1>
    <ul>
      <li>
        <ListItem author="Brian" />
      </li>
      <li>
        <ListItem author="James" />
      </li>
      <li>
        <ListItem author="Alice" />
      </li>
    </ul>
    <AddItem />
    <BookForm />
  </div>
);
export default BookList;

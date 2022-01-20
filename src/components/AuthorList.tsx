import AddItem from "../elements/AddItem";
import AuthorForm from "./AuthorForm";
import ListItem from "../elements/ListItem";

const AuthorList: React.FC = () => (
  <div className="list">
    <h1>Authors</h1>
    <hr />
    <ul className="list-group">
      <li>
        <ListItem id={1} author="Author 1 name" />
      </li>
      <li>
        <ListItem id={2} author="Author 2 name" />
      </li>
      <li>
        <ListItem id={3} author="Author 3 name" />
      </li>
    </ul>
    <AddItem />
    <AuthorForm />
  </div>
);
export default AuthorList;

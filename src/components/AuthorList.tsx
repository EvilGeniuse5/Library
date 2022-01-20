import AddItem from "../elements/AddItem";
import AuthorForm from "./AuthorForm";
import ListItem from "../elements/ListItem";

const AuthorList: React.FC = () => (
  <div>
    <h1>Authors</h1>
    <ul className="list-group">
      <li>
        <ListItem id={1} author="Brian" />
      </li>
      <li>
        <ListItem id={2} author="James" />
      </li>
    </ul>
    <AddItem />
    <AuthorForm />
  </div>
);
export default AuthorList;

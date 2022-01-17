import AddItem from "../elements/AddItem";
import AuthorForm from "./AuthorForm";
import ListItem from "../elements/ListItem";

const AuthorList: React.FC = () => (
  <div>
    <h1>Authors</h1>
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
    <AuthorForm />
  </div>
);
export default AuthorList;

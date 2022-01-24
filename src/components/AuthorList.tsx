import AddItem from "../elements/AddItem";
import AuthorForm from "./AuthorForm";
import ListItem from "../elements/ListItem";
import { useState } from "react";

const AuthorList: React.FC = () => {
  const [visibility, setVisibility] = useState(false);

  const handleFormVisibility = () => {
    setVisibility(true);
  };

  const handleOnClose = () => {
    setVisibility(false);
  };

  var className: string = visibility
    ? "author-form"
    : "author-form visibility-hidden";
  return (
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
      <AddItem title="Add Author" onclick={handleFormVisibility} />
      <AuthorForm className={className} onclick={handleOnClose} />
    </div>
  );
};
export default AuthorList;

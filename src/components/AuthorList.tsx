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
      <hr className="title-hr" />
      <ul className="list-group">
        <li>
          <ListItem id={1} title="Author 1 name" type="author" />
        </li>
        <li>
          <ListItem id={2} title="Author 2 name" type="author" />
        </li>
        <li>
          <ListItem id={3} title="Author 3 name" type="author" />
        </li>
      </ul>
      <AddItem title="Add Author" onclick={handleFormVisibility} />
      <AuthorForm className={className} onclick={handleOnClose} />
    </div>
  );
};
export default AuthorList;

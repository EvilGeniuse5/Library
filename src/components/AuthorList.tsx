import AddItem from "../elements/AddItem";
import AuthorForm from "./AuthorForm";
import ListItem from "../elements/ListItem";
import React from "react";

const AuthorList: React.FC<{
  authorList: any;
  createAuthor: (author: string)=>void;
  removeAuthor: (index: number)=>void;
}> = ({authorList, createAuthor, removeAuthor}) => {
  const [visibility, setVisibility] = React.useState<boolean>(false);
  
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

      {authorList.length === 0 ? (
        <p className="list-empty">
          <i>No authors listed here.</i>
        </p>
      ) : null}
      <ul className="list-group">
        {authorList.map((author: string, index: number) => (
          <li key={index}>
            {" "}
            <ListItem
              id={index}
              title={author}
              onclick={() => removeAuthor(index)}
              type="author"
            />
          </li>
        ))}
      </ul>
      <AddItem title="Add Author" onclick={handleFormVisibility} />
      <AuthorForm
        className={className}
        onclick={handleOnClose}
        createAuthor={(author: string) => createAuthor(author)}
      />
    </div>
  );
};
export default AuthorList;

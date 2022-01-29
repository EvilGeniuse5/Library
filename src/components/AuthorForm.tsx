import InputBox from "../elements/InputBox";
import Create from "../elements/CreateButton";
import { XCircle } from "react-feather";
import { validName } from "../types/Regex";
import React from "react";

const AuthorForm: React.FC<{
  className: string;
  onclick: () => void;
  createAuthor: (author: string) => void;
}> = ({ className, onclick, createAuthor }) => {
  const [author, setAuthor] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(false);
  const [heading, setHeading] = React.useState<string>(
    "Author name is required"
  );
  const [description, setDescription] = React.useState<string>(
    "Please enter the author name to continue."
  );
  const handleAuthor = (authorName: string) => {
    if (authorName === "") {
      setValid(false);
      setHeading("Author name is required");
      setDescription("Please enter the author name to continue.");
    } else if (!validName.test(authorName)) {
      setValid(false);
      setHeading("Invalid Author name");
      setDescription("Please enter a valid author name.");
    } else if (authorName.length > 0 || authorName !== "") {
      setValid(true);
      setHeading("Create New Author");
      setDescription(
        "Do you want to add " +
          authorName +
          " to author list? You can update or remove this author at any moment."
      );
    }
    setAuthor(authorName);
  };
  return (
    <div className={"library-form " + className}>
      <div className="library-form__form d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="library-form__title">
            <h1>Create Author</h1>
            <hr />
          </div>
          <span onClick={onclick}>
            <XCircle className="library-form__xcircle" />
          </span>
        </div>

        <InputBox
          title="Name of Author"
          onchange={(authorName: string) => handleAuthor(authorName)}
        />
        <Create
          heading={heading}
          description={description}
          cancel="Cancel"
          confirm="Confirm"
          onclick={() => createAuthor(author)}
          validation={valid}
        />
      </div>
    </div>
  );
};
export default AuthorForm;

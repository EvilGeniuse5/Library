import InputBox from "../elements/InputBox";
import Create from "../elements/CreateButton";
import { XCircle } from "react-feather";
import { validName } from "../types/Regex";
import SelectAuthor from "../elements/SelectAuthor";
import React from "react";

const BookForm: React.FC<{
  className: string;
  onclick: () => void;
  createBook: (book: string) => void;
  authorList: any;
}> = ({ className, onclick, createBook, authorList}) => {
  const [book, setBook] = React.useState<string>("");
  const [valid, setValid] = React.useState<boolean>(false);
  const [heading, setHeading] = React.useState<string>(
    "Book name is required"
  );
  const [description, setDescription] = React.useState<string>(
    "Please enter the book name to continue."
  );
  const handleBook = (bookName: string) => {
    if (bookName === "") {
      setValid(false);
      setHeading("Book name is required");
      setDescription("Please enter the Book name to continue.");
    } else if (!validName.test(bookName)) {
      setValid(false);
      setHeading("Invalid Book name");
      setDescription("Please enter a valid Book name.");
    } else if (bookName.length > 0 || bookName !== "") {
      setValid(true);
      setHeading("Create New Book");
      setDescription(
        "Do you want to add " +
          bookName +
          " to book list? You can update or remove this book at any moment."
      );
    }
    setBook(bookName);
  };
  return (
    <div className={"library-form " + className}>
      <div className="library-form__form d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="library-form__title">
            <h1>Create Book</h1>
            <hr />
          </div>
          <span onClick={onclick}>
            <XCircle className="library-form__xcircle" />
          </span>
        </div>

        <InputBox
          title="Name of Book"
          onchange={(bookName: string) => handleBook(bookName)}
        />
        <InputBox title="ISBN" onchange={() => {}} />
        <SelectAuthor title="Author" authorList={authorList} />
        <Create
          heading={heading}
          description={description}
          cancel="Cancel"
          confirm="Confirm"
          onclick={() => createBook(book)}
          validation={valid}
        />
      </div>
    </div>
  );
};
export default BookForm;
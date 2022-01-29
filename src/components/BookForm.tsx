import InputBox from "../elements/InputBox";
import SelectAuthor from "../elements/SelectAuthor";
import Create from "../elements/CreateButton";
import { XCircle } from "react-feather";

const BookForm: React.FC<{
  className: string;
  onclick: () => void;
}> = ({ className, onclick }) => {
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
        <InputBox title="Title of the Book" onchange={() => {}} />
        <InputBox title="ISBN" onchange={() => {}} />
        <SelectAuthor title="Author" />
        {/* <Create
          heading="Create New Book"
          description="You can update or remove this book at any moment."
          cancel="Cancel"
          confirm="Confirm"
        /> */}
      </div>
    </div>
  );
};
export default BookForm;

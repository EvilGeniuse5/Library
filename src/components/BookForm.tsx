import InputBox from "../elements/InputBox";
import SelectAuthor from "../elements/SelectAuthor";
import Create from "../elements/CreateButton";
import { XCircle } from "react-feather";
const BookForm: React.FC = () => (
  <div className="library-form">
    <div className="library-form__form d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between mb-4">
        <div className="library-form__title">
          <h1>Create Book</h1>
          <hr />
        </div>

        <XCircle className="library-form__xcircle" />
      </div>
      <InputBox title="Title of the Book" />
      <InputBox title="ISBN" />
      <SelectAuthor title="Author" />
      <Create />
    </div>
  </div>
);
export default BookForm;

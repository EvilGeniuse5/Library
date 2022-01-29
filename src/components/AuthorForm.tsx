import InputBox from "../elements/InputBox";
import Create from "../elements/CreateButton";
import { XCircle } from "react-feather";

const AuthorForm: React.FC<{
  className: string;
  onclick: () => void;
}> = ({ className, onclick }) => {
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
        <InputBox title="Name of Author" />
        <Create
          heading="Create New Author"
          description="You can update or remove this author at any moment."
          cancel="Cancel"
          confirm="Confirm"
        />
      </div>
    </div>
  );
};
export default AuthorForm;

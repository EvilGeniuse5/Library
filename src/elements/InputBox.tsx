import { Form } from "react-bootstrap";
const InputBox: React.FC = () => (
  <div className="input-box">
    {" "}
    <p className="input-box__title">Title of the Book</p>
    <Form.Control className="input-box__input" type="email" />
  </div>
);
export default InputBox;

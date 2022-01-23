import { Form } from "react-bootstrap";
const InputBox: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="input-box">
      {" "}
      <p className="input-box__title">{title}</p>
      <Form.Control className="input-box__input" type="email" />
    </div>
  );
};
export default InputBox;

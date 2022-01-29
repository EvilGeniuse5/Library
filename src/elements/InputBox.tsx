import { Form } from "react-bootstrap";
const InputBox: React.FC<{
  title: string;
  onchange: (author: string) => void;
}> = ({ title, onchange }) => {
  return (
    <div className="input-box">
      {" "}
      <p className="input-box__title">{title}</p>
      <Form.Control
        className="input-box__input"
        type="text"
        onChange={(e) => onchange(e.target.value)}
      />
    </div>
  );
};
export default InputBox;

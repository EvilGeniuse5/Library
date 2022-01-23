import { useState } from "react";
import Select from "react-select";
const SelectAuthor: React.FC = () => {
  const [isClearable, setClearable] = useState(true);
  const toggleClearable = () => {
    isClearable ? setClearable(false) : setClearable(false);
  };
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="select-author">
      {" "}
      <p className="select-author__title">Title of the Book</p>
      <Select
        options={options}
        isClearable={true}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          border: "none",
        })}
        className="select-author__select"
        placeholder=""
      />
    </div>
  );
};
export default SelectAuthor;

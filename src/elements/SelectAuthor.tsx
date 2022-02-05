import Select from "react-select";
import ListItem from "../elements/ListItem";

const SelectAuthor: React.FC<{ title: string; authorList: any;}> = ({ title, authorList}) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  // console.log(authorList);
  // console.log(options);
  return (
    <div className="select-author">
      {" "}
      <p className="select-author__title">{title}</p>
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

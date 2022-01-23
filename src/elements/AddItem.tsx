import { Plus } from "react-feather";
const AddItem: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="add-item">
      <Plus className="add-item__plus" />
      {title}
    </div>
  );
};
export default AddItem;

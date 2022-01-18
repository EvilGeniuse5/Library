import { Edit, Trash2 } from "react-feather";
const ListItem: React.FC<{ id: number; author: string }> = ({ id, author }) => {
  return (
    <div className="list-item py-4">
      {id}.&nbsp;
      {author}
      <div className="list-item__settings">
        <Edit className="list-item__icon edit" />
        <Trash2 className="list-item__icon trash" />
      </div>
    </div>
  );
};
export default ListItem;

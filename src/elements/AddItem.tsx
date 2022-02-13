import { Plus } from 'react-feather';
const AddItem: React.FC<{
	title: string;
	onclick: () => void;
}> = ({ title, onclick }) => {
	return (
		<div className='add-item' onClick={onclick}>
			<Plus className='add-item__plus' />
			{title}
		</div>
	);
};
export default AddItem;

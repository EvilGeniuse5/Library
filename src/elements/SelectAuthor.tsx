import React from 'react';
import Select from 'react-select';

const SelectAuthor: React.FC<{ title: string }> = ({ title }) => {
	const options = [
		{ value: 'chocolate', label: 'Chocolate' },
		{ value: 'strawberry', label: 'Strawberry' },
		{ value: 'vanilla', label: 'Vanilla' },
	];

	return (
		<div className='select-author'>
			{' '}
			<p className='select-author__title'>{title}</p>
			<Select
				options={options}
				isClearable={true}
				theme={(theme) => ({
					...theme,
					borderRadius: 0,
					border: 'none',
				})}
				className='select-author__select'
				placeholder=''
			/>
		</div>
	);
};
export default SelectAuthor;

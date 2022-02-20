import React from 'react';
import { Form } from 'react-bootstrap';

const InputBox: React.FC<{
	title: string;
	onchange: (author: string) => void;
	error: string;
	validated: boolean;
}> = ({ title, error, onchange, validated }) => {
	return (
		<Form.Group className='input-box'>
			<Form.Label className='input-box__title'>{title}</Form.Label>
			<Form.Control
				required
				className='input-box__input'
				type='text'
				onChange={(e) => onchange(e.target.value)}
				isInvalid={validated}
			/>
			<Form.Control.Feedback type={validated ? 'valid' : 'invalid'}>
				{error}
			</Form.Control.Feedback>
		</Form.Group>
	);
};
export default InputBox;

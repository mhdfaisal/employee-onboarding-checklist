import React from 'react';

import Input from '../shared/FormElements/Input';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../utils/validators';

const AddCandidate = () => {
	const [formState, inputHandler] = useForm(
		{
			name: {
				value: '',
				isValid: false,
			},
			email: {
				value: '',
				isValid: false,
			},
			phone: {
				value: '',
				isValid: false,
			},
			department: {
				value: '',
				isValid: false,
			},
		},
		false
	);
	return (
		<div>
			<Input
				id='name'
				element='input'
				type='text'
				variant='standard'
				label="Candidate's Name *"
				errorText='Required'
				validators={[VALIDATOR_REQUIRE()]}
				onInput={inputHandler}
				fullWidth={true}
			/>
		</div>
	);
};
export default AddCandidate;

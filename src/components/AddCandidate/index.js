import React from 'react';

import Input from '../shared/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../utils/validators';

const AddCandidate = () => {
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
			/>
		</div>
	);
};
export default AddCandidate;

import React from 'react';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';
import SalaryNegotiation from '../../components/SalaryNegotitation';

const Home = () => {
	return (
		<div>
			<CustomStepper />
			{/* <AddCandidate /> */}
			{/* <InterviewFeedback /> */}
			<SalaryNegotiation />
		</div>
	);
};

export default Home;

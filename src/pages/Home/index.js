import React from 'react';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';
import SalaryNegotiation from '../../components/SalaryNegotitation';
import EmailWidget from '../../components/shared/EmailWidget';

const Home = () => {
	return (
		<div>
			<CustomStepper />
			{/* <AddCandidate /> */}
			{/* <InterviewFeedback /> */}
			{/* <SalaryNegotiation /> */}
			<EmailWidget />
		</div>
	);
};

export default Home;

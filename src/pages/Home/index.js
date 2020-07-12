import React from 'react';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';

const Home = () => {
	return (
		<div>
			<CustomStepper />
			{/* <AddCandidate /> */}
			<InterviewFeedback />
		</div>
	);
};

export default Home;

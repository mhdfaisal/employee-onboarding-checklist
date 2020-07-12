import React from 'react';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';
import SalaryNegotiation from '../../components/SalaryNegotitation';
import GiveOffer from '../../components/GiveOffer';
import RejectCandidate from '../../components/RejectCandidate';
import Header from '../../components/shared/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<CustomStepper />
			<AddCandidate />
			{/* <InterviewFeedback /> */}
			{/* <SalaryNegotiation /> */}
			{/* <GiveOffer /> */}
			{/* <RejectCandidate /> */}
		</div>
	);
};

export default Home;

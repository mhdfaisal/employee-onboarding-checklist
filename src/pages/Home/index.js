import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';
import SalaryNegotiation from '../../components/SalaryNegotitation';
import GiveOffer from '../../components/GiveOffer';
import RejectCandidate from '../../components/RejectCandidate';
import Header from '../../components/shared/Header';

const STEPS = {
	1: <AddCandidate />,
	2: <InterviewFeedback />,
	3: <SalaryNegotiation />,
	4: <GiveOffer />,
	5: <RejectCandidate />,
};

const Home = () => {
	const step = useSelector((state) => {
		return state?.onBoardingInfo?.step ?? 1;
	}, shallowEqual);
	return (
		<div>
			<Header />
			<CustomStepper />
			{STEPS[step]}
		</div>
	);
};

export default Home;

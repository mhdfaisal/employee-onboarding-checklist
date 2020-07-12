import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import CustomStepper from '../../components/shared/CustomStepper';
import AddCandidate from '../../components/AddCandidate';
import InterviewFeedback from '../../components/InterviewFeedback';
import SalaryNegotiation from '../../components/SalaryNegotitation';
import GiveOffer from '../../components/GiveOffer';
import RejectCandidate from '../../components/RejectCandidate';

const Home = () => {
	return (
		<div>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>Employee Onboarding Checklist</Typography>
				</Toolbar>
			</AppBar>
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

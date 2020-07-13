import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import PersonalVideoIcon from '@material-ui/icons/PersonalVideo';
import PersonAdd from '@material-ui/icons/PersonAdd';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CheckIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useColorlibStepIconStyles = makeStyles({
	root: {
		backgroundColor: '#ccc',
		zIndex: 1,
		color: '#fff',
		width: 50,
		height: 50,
		display: 'flex',
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	active: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
		boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
	},
	completed: {
		backgroundImage:
			'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
	},
});

const ColorlibConnector = withStyles({
	alternativeLabel: {
		top: 22,
	},
	active: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	completed: {
		'& $line': {
			backgroundImage:
				'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
		},
	},
	line: {
		height: 3,
		border: 0,
		backgroundColor: '#eaeaf0',
		borderRadius: 1,
	},
})(StepConnector);

const ColorlibStepIcon = (props) => {
	const classes = useColorlibStepIconStyles();
	const { active, completed, icon } = props;

	const icons = {
		1: <PersonAdd />,
		2: <PersonalVideoIcon />,
		3: <AccountBalanceWalletIcon />,
		4: <CheckIcon />,
		5: <CancelIcon />,
	};

	return (
		<div
			className={clsx(classes.root, {
				[classes.active]: active,
				[classes.completed]: completed,
			})}
		>
			{icons[String(icon)]}
		</div>
	);
};

const getSteps = () => {
	return ['Add Candidate', 'Interview', 'Salary Negotiation', 'Give Offer', 'Reject Candidate'];
};

const CustomStepper = () => {
	const step = useSelector((state) => {
		return state?.onBoardingInfo?.step ?? 1;
	}, shallowEqual);
	const steps = getSteps();
	return (
		<Stepper activeStep={step - 1} alternativeLabel connector={<ColorlibConnector />}>
			{steps.map((item, index) => {
				return (
					<Step key={index}>
						<StepLabel StepIconComponent={ColorlibStepIcon}>{item}</StepLabel>
					</Step>
				);
			})}
		</Stepper>
	);
};
export default CustomStepper;

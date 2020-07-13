import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import Input from '../shared/FormElements/Input';
import Assignee from '../shared/Assignee';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { saveData } from '../../store/actions';
import { ADD_INTERVIEW_FEEDBACK } from '../../store/types';
import styles from '../AddCandidate/style.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(4),
		color: theme.palette.text.secondary,
	},
}));

const InterviewFeedback = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const candidateInfo = useSelector((state) => {
		return state?.onBoardingInfo?.candidateInfo ?? {};
	}, shallowEqual);
	const [formState, inputHandler] = useForm(
		{
			feedback: {
				value: '',
				isValid: false,
			},
			isHired: {
				value: 'no',
				isValid: true,
			},
		},
		false
	);
	const { isValid } = formState;
	const handleFormSubmit = (e) => {
		e.preventDefault();
		const { feedback, isHired } = formState?.inputs ?? {};
		dispatch(
			saveData(
				ADD_INTERVIEW_FEEDBACK,
				{
					...candidateInfo,
					feedback: feedback?.value,
					isHired: isHired?.value,
				},
				isHired?.value === 'no' ? 5 : 3
			)
		);
	};
	return (
		<Container>
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<h2 className={styles.title}>Interview Feedback</h2>
					</Grid>
					<Grid item xs={6}>
						<div className={styles.assigneeContainer}>
							<Assignee />
						</div>
					</Grid>
				</Grid>
				<form onSubmit={handleFormSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Input
								id='feedback'
								element='input'
								multiline={true}
								rows={4}
								placeholder='Please enter interview feedback'
								type='text'
								variant='outlined'
								errorText='Feedback text is required (at least 150 characters)'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</Grid>
						<Grid item xs={12}>
							<Input
								id='isHired'
								element='checkbox'
								validators={[]}
								onInput={inputHandler}
								label='Is candidate hired ?'
								initialValue={formState?.inputs?.isHired?.value}
								initialValid={true}
								isCheckbox={true}
							/>
						</Grid>
						<Grid item xs={12}>
							<div className={styles.formBtnContainer}>
								<Button
									type='submit'
									variant='contained'
									color='primary'
									endIcon={<KeyboardArrowRight />}
									size='large'
									disabled={!isValid}
								>
									Submit
								</Button>
							</div>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};
export default InterviewFeedback;

import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';

import Input from '../shared/FormElements/Input';
import Assignee from '../shared/Assignee';
import { departmentConstantsArray } from '../../utils/departmentConstants';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { saveData } from '../../store/actions';
import { ADD_CANDIDATE_DETAILS } from '../../store/types';
import styles from './style.module.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(4),
		color: theme.palette.text.secondary,
	},
}));

const AddCandidate = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
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
				isValid: true,
			},
		},
		false
	);
	const { isValid } = formState;

	const handleFormSubmit = (e) => {
		e.preventDefault();
		const { name, email, phone, department } = formState?.inputs ?? {};
		dispatch(
			saveData(
				ADD_CANDIDATE_DETAILS,
				{
					name: name?.value,
					email: email?.value,
					phone: phone?.value,
					department: department?.value,
				},
				2
			)
		);
	};

	return (
		<Container>
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<h2 className={styles.title}>Add Candidate Details</h2>
					</Grid>
					<Grid item xs={6}>
						<div className={styles.assigneeContainer}>
							<Assignee />
						</div>
					</Grid>
				</Grid>
				<form onSubmit={handleFormSubmit}>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Input
								id='name'
								element='input'
								type='text'
								variant='outlined'
								label="Candidate's Name *"
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								id='email'
								element='input'
								type='email'
								variant='outlined'
								label="Candidate's Email *"
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								id='phone'
								element='input'
								type='text'
								variant='outlined'
								label="Candidate's Phone *"
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</Grid>
						<Grid item xs={6}>
							<Input
								id='department'
								element='select'
								type='text'
								variant='outlined'
								label="Candidate's Department *"
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
								selectItems={departmentConstantsArray}
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
export default AddCandidate;

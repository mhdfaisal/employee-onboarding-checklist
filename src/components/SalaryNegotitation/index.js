import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

import Input from '../shared/FormElements/Input';
import Assignee from '../shared/Assignee';
import { useForm } from '../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
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

const SalaryNegotiation = () => {
	const classes = useStyles();
	const [formState, inputHandler] = useForm(
		{
			salary: {
				value: '',
				isValid: false,
			},
		},
		false
	);
	const { isValid } = formState;
	return (
		<Container>
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<h2 className={styles.title}>Negotiated Salary</h2>
					</Grid>
					<Grid item xs={6}>
						<div className={styles.assigneeContainer}>
							<Assignee />
						</div>
					</Grid>
				</Grid>
				<form>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<Input
								id='salary'
								type='number'
								element='input'
								label='Salary amount'
								errorText='Please enter the negotiated salary'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>$</InputAdornment>
									),
								}}
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
export default SalaryNegotiation;

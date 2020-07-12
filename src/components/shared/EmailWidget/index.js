import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

import Input from '../FormElements/Input';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../../utils/validators';
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

const EmailWidget = () => {
	const classes = useStyles();
	const [formState, inputHandler] = useForm(
		{
			to: {
				value: '',
				isValid: true,
			},
			cc: {
				value: '',
				isValid: true,
			},
			bcc: {
				value: '',
				isValid: true,
			},
			subject: {
				value: '',
				isValid: true,
			},
			body: {
				value: '',
				isValid: true,
			},
		},
		true
	);
	return (
		<Container>
			<Paper className={classes.paper}>
				<form>
					<div className={styles.formItemFlex}>
						<div className={styles.label}>To</div>
						<div className={styles.formControl}>
							<Input
								id='to'
								element='input'
								type='email'
								variant='standard'
								disabled={true}
								initialValue={formState?.inputs?.to?.value}
								initialValid={formState?.inputs?.to?.isValid}
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</div>
					</div>
					<div className={styles.formItemFlex}>
						<div className={styles.label}>Cc</div>
						<div className={styles.formControl}>
							<Input
								id='cc'
								element='input'
								type='email'
								variant='standard'
								disabled={true}
								initialValue={formState?.inputs?.cc?.value}
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
								initialValid={formState?.inputs?.cc?.isValid}
							/>
						</div>
					</div>
					<div className={styles.formItemFlex}>
						<div className={styles.label}>Bcc</div>
						<div className={styles.formControl}>
							<Input
								id='bcc'
								element='input'
								type='email'
								variant='standard'
								disabled={true}
								initialValue={formState?.inputs?.bcc?.value}
								errorText='Required'
								validators={[VALIDATOR_REQUIRE()]}
								onInput={inputHandler}
								fullWidth={true}
								initialValid={formState?.inputs?.bcc?.isValid}
							/>
						</div>
					</div>
					<div className={styles.formItemFlex}>
						<div className={styles.label}>Subject</div>
						<div className={styles.formControl}>
							<Input
								id='subject'
								element='input'
								type='text'
								variant='standard'
								initialValue={formState?.inputs?.subject?.value}
								initialValid={formState?.inputs?.subject?.isValid}
								validators={[]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</div>
					</div>
					<div className={styles.formItemFlex}>
						<div className={`${styles.label} ${styles.bodyLabel}`}>Body</div>
						<div className={styles.formControl}>
							<Input
								id='body'
								element='input'
								multiline={true}
								rows={4}
								type='text'
								variant='outlined'
								initialValue={formState?.inputs?.body?.value}
								initialValid={formState?.inputs?.body?.isValid}
								validators={[]}
								onInput={inputHandler}
								fullWidth={true}
							/>
						</div>
					</div>
					<div className={styles.submitBtnContainer}>
						<Button
							type='submit'
							size='large'
							endIcon={<SendIcon />}
							variant='contained'
							color='primary'
						>
							Send
						</Button>
					</div>
				</form>
			</Paper>
		</Container>
	);
};
export default EmailWidget;

import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { useSelector, shallowEqual } from 'react-redux';

import Input from '../FormElements/Input';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../../utils/validators';
import {
	CC,
	BCC,
	HIRED_SUBJECT,
	NOT_HIRED_SUBJECT,
	HIRED_BODY,
	NOT_HIRED_BODY,
} from '../../../utils/emailTemplateConstants';
import { EMAIL_BASE_URL } from '../../../utils/emailURLConstants';
import styles from './style.module.css';

const EmailWidget = () => {
	const candidateInfo = useSelector((state) => {
		return state?.onBoardingInfo?.candidateInfo ?? {};
	}, shallowEqual);
	const [formState, inputHandler] = useForm(
		{
			to: {
				value: candidateInfo?.email ?? '',
				isValid: true,
			},
			cc: {
				value: CC,
				isValid: true,
			},
			bcc: {
				value: BCC,
				isValid: true,
			},
			subject: {
				value:
					candidateInfo?.isHired === 'yes'
						? HIRED_SUBJECT + ' ' + candidateInfo?.name
						: NOT_HIRED_SUBJECT + ' ' + candidateInfo?.name,
				isValid: true,
			},
			body: {
				value: candidateInfo?.isHired === 'yes' ? HIRED_BODY : NOT_HIRED_BODY,
				isValid: true,
			},
		},
		true
	);
	const openGmailCompose = (e) => {
		e.preventDefault();
		const { inputs } = formState;
		const { to, cc, bcc, subject, body } = inputs;
		const URL =
			EMAIL_BASE_URL +
			'&to=' +
			encodeURI(to.value) +
			'&cc=' +
			encodeURI(cc.value) +
			'&bcc=' +
			encodeURI(bcc.value) +
			'&su=' +
			encodeURI(subject.value) +
			'&body=' +
			encodeURI(body.value);
		window.open(URL);
	};

	return (
		<form onSubmit={openGmailCompose}>
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
	);
};
export default EmailWidget;

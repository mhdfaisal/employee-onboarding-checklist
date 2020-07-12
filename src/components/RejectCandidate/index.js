import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import EmailWidget from '../shared/EmailWidget';
import Assignee from '../shared/Assignee';
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

const RejectCandidate = () => {
	const classes = useStyles();
	return (
		<Container>
			<Paper className={classes.paper}>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<h2 className={styles.title}>Send Rejection Email</h2>
					</Grid>
					<Grid item xs={6}>
						<div className={styles.assigneeContainer}>
							<Assignee />
						</div>
					</Grid>
				</Grid>
				<EmailWidget />
			</Paper>
		</Container>
	);
};
export default RejectCandidate;

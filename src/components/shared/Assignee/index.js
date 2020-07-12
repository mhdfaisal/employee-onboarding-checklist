import React from 'react';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import styles from './style.module.css';

const Assignee = () => {
	return (
		<div className={styles.assigneeContent}>
			<div className={`${styles.assigneeContentItem} ${styles.assigneeIcon}`}>
				<AssignmentIndIcon />
			</div>
			<div className={styles.assigneeContentItem}>HR (Assignee)</div>
		</div>
	);
};

export default Assignee;

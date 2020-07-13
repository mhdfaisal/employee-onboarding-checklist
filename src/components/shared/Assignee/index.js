import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';

import { HR } from '../../../utils/departmentConstants';
import styles from './style.module.css';

const Assignee = () => {
	const assignee = useSelector((state) => {
		return state?.onBoardingInfo?.assignee ?? HR;
	}, shallowEqual);
	return (
		<div className={styles.assigneeContent}>
			<div className={`${styles.assigneeContentItem} ${styles.assigneeIcon}`}>
				<AssignmentIndIcon />
			</div>
			<div className={styles.assigneeContentItem}>{assignee.toUpperCase()} (Assignee)</div>
		</div>
	);
};

export default Assignee;

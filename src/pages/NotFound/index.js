import React from 'react';

import Header from '../../components/shared/Header';
import styles from './style.module.css';

const NotFound = () => {
	return (
		<div className={styles.notFoundContainer}>
			<Header />
			<section className={styles.notFoundTextContainer}>
				<h1> 404 -Oops, this route was not found!</h1>
			</section>
		</div>
	);
};
export default NotFound;

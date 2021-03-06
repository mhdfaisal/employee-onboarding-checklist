import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

import styles from './style.module.css';

const Header = () => {
	return (
		<header>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6'>
						<Link to='/' className={styles.headerLink}>
							Employee Onboarding Checklist
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
};
export default Header;

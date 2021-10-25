import { useEffect, useState, useMemo } from 'react';
import { useHistory } from 'react-router';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { API, BUTTON_TEXT_LOGOUT } from '../../constants';

import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';

import PropTypes from 'prop-types';

const Header = ({ pathname }) => {
	const [visible, setVisible] = useState(false);
	const [userName, setUserName] = useState('');

	const history = useHistory();

	const buttonVisibility = useMemo(
		() => pathname === '/login' || pathname === '/registration',
		[pathname]
	);

	useEffect(() => {
		setVisible(buttonVisibility);
	}, [buttonVisibility]);

	useEffect(() => {
		const myFetch = async () => {
			try {
				const token = localStorage.getItem('token');
				if (token) {
					const response = await fetch(`${API}/users/me`, {
						headers: {
							Authorization: token,
						},
					});
					const result = await response.json();

					setUserName(result.result.name);
				}
			} catch (error) {
				console.error(error);
			}
		};

		myFetch();
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('token');
		history.push('/login');
	};

	return (
		<header className={styles.header}>
			<Link to='/courses'>
				<Logo />
			</Link>
			<div className={styles.info}>
				{!visible && (
					<>
						<p>{userName}</p>
						<Button onClick={handleLogout} children={BUTTON_TEXT_LOGOUT} />
					</>
				)}
			</div>
		</header>
	);
};

Header.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default Header;

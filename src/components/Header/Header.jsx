import { useMemo, memo } from 'react';
import { useHistory } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../services';

import { deleteUser } from '../../store/user/actionCreators';
import { getUser } from '../../store/selectors';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';

import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';

import PropTypes from 'prop-types';

const Header = ({ pathname }) => {
	const history = useHistory();

	const { name } = useSelector(getUser);
	const dispatch = useDispatch();

	const visible = useMemo(
		() => pathname === '/login' || pathname === '/registration',
		[pathname]
	);

	// useEffect(() => {
	// 	if (isAuth) return;

	// 	const myFetch = async () => {
	// 		try {
	// 			const token = localStorage.getItem('token');

	// 			if (token) {
	// 				const user = await fetchUser(token);
	// 				dispatch(addUser(user));
	// 			}
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};

	// 	myFetch();
	// }, [isAuth, dispatch]);

	const handleLogout = async () => {
		const token = localStorage.getItem('token');

		await logout(token);

		localStorage.removeItem('token');
		dispatch(deleteUser());
		history.push('/login');
	};

	return (
		<header className={styles.header}>
			<Link to='/'>
				<Logo />
			</Link>
			<div className={styles.info}>
				{!visible && (
					<>
						<p>{name}</p>
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

export default memo(Header);

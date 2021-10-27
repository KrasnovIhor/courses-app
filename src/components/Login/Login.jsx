import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { addUser } from '../../store/user/actionCreators';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { fetchUser, login } from '../../services';

import {
	LABEL_TEXT_EMAIL,
	LABEL_TEXT_PASSWORD,
	INPUT_PLACEHOLDER_EMAIL,
	INPUT_PLACEHOLDER_PASSWORD,
	BUTTON_TEXT_LOGIN,
} from '../../constants';

import styles from './Login.module.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const dispatch = useDispatch();

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const userLoggedIn = {
				email,
				password,
			};
			const response = await login(userLoggedIn);
			const {
				data: { result: token },
				status,
				successful,
			} = response;
			const user = await fetchUser(token);

			dispatch(addUser(user));

			if (!successful && status !== 201) {
				alert('Failed to login!');
				return;
			}

			localStorage.setItem('token', token);
			history.push('/courses');
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className={styles.login}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2>Login</h2>
				<Input
					className={styles.input}
					type='email'
					placeholder={INPUT_PLACEHOLDER_EMAIL}
					labeltext={LABEL_TEXT_EMAIL}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type='password'
					placeholder={INPUT_PLACEHOLDER_PASSWORD}
					labeltext={LABEL_TEXT_PASSWORD}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button children={BUTTON_TEXT_LOGIN} />
				<p>
					If you don'/t have an account, you can{' '}
					<Link to='/registration'>Register</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;

import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { loginThunk } from '../../store/user/thunk';

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

	const handleSubmit = (e) => {
		e.preventDefault();
		const user = {
			email,
			password,
		};

		dispatch(loginThunk(user));

		history.push('/courses');
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

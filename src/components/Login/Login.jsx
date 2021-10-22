import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { API } from '../../constants';

import styles from './Login.module.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const user = {
				password,
				email,
			};

			const response = await fetch(`${API}/login`, {
				method: 'POST',
				body: JSON.stringify(user),
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const result = await response.json();

			localStorage.setItem('token', result.result);

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
					placeholder='Enter email'
					labeltext='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					type='password'
					placeholder='Enter password'
					labeltext='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button children='Login' />
				<p>
					If you don'/t have an account, you can{' '}
					<Link to='/registration'>Register</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
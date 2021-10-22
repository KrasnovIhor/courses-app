import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Link } from 'react-router-dom';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import {
	API,
	LABEL_TEXT_EMAIL,
	LABEL_TEXT_NAME,
	LABEL_TEXT_PASSWORD,
	INPUT_PLACEHOLDER_EMAIL,
	INPUT_PLACEHOLDER_NAME,
	INPUT_PLACEHOLDER_PASSWORD,
	BUTTON_TEXT_REGISTRATION,
} from '../../constants';

import styles from './Registration.module.scss';

const Registration = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newUser = {
			name,
			password,
			email,
		};

		const response = await fetch(`${API}/register`, {
			method: 'POST',
			body: JSON.stringify(newUser),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const result = await response.json();

		if (result.successful) {
			history.push('/login');
		} else {
			alert('Something went wrong');
		}

		console.log(result);
	};
	return (
		<div className={styles.registrtion}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2>Registration</h2>
				<Input
					className={styles.input}
					type='text'
					placeholder={INPUT_PLACEHOLDER_NAME}
					labeltext={LABEL_TEXT_NAME}
					onChange={(e) => setName(e.target.value)}
					value={name}
					required
				/>
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
				<Button type='submit' children={BUTTON_TEXT_REGISTRATION} />
				<p>
					If you have an account, you can <Link to='login'>Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Registration;

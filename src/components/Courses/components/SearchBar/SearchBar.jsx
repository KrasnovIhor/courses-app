import { useState } from 'react';

import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';

import { Link } from 'react-router-dom';

import styles from './SearchBar.module.scss';

import {
	BUTTON_TEXT_NEW_COURSE,
	BUTTON_TEXT_SEARCH,
	INPUT_PLACEHOLDER_SEARCH,
} from '../../../../constants';

const SearchBar = ({ handleSearch }) => {
	const [inputData, setInputData] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(inputData);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.searchBar}>
				<Input
					className={styles.searchInput}
					placeholder={INPUT_PLACEHOLDER_SEARCH}
					value={inputData}
					onChange={setInputData}
				/>
				<Button type='submit' children={BUTTON_TEXT_SEARCH} />
			</div>
			<Link to='/courses/add'>
				<Button type='button' children={BUTTON_TEXT_NEW_COURSE} />
			</Link>
		</form>
	);
};

export default SearchBar;

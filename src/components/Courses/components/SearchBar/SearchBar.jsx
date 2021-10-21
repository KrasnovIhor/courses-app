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
					placeHolderText={INPUT_PLACEHOLDER_SEARCH}
					value={inputData}
					onChange={setInputData}
				/>
				<Button type='submit' buttonText={BUTTON_TEXT_SEARCH} />
			</div>
			<Link to='/create'>
				<Button type='button' buttonText={BUTTON_TEXT_NEW_COURSE} />
			</Link>
		</form>
	);
};

export default SearchBar;

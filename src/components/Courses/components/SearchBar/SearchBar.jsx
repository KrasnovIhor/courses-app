import { useState } from 'react';
import { Input } from '../../../../common/Input/Input';
import { Button } from '../../../../common/Button/Button';
import styles from './SearchBar.module.scss';
import { Link } from 'react-router-dom';

const SearchBar = ({ handleSearch }) => {
	const [inputData, setInputData] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(inputData);
		// console.log('search submitted:', inputData);
	};

	console.log(styles);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.searchBar}>
				<Input
					className={styles.searchInput}
					placeHolderText='Enter Course name or id...'
					value={inputData}
					onChange={setInputData}
				/>
				<Button type='submit' buttonText='Search' />
			</div>
			<Link to='/create'>
				<Button type='button' buttonText='Add New Course' />
			</Link>
		</form>
	);
};

export default SearchBar;

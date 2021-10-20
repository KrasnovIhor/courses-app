import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import styles from './CreateCourse.module.scss';

const CreateCourse = ({ history }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push('/');
	};

	return (
		<div className={styles.createCourse}>
			<form onSubmit={handleSubmit}>
				<div className={styles.row}>
					<Input
						onChange={setTitle}
						value={title}
						labelText='Title'
						placeHolderText='Enter title...'
						id='title'
					/>
					<Button buttonText='Create Course' />
				</div>
				<Input
					isTextarea
					onChange={setDescription}
					value={description}
					labelText='Description'
					placeHolderText='Enter Description here...'
					id='description'
				/>
				<div className={styles.addAuthor}>
					<div className={styles.left}>
						<h3>Add Author</h3>
						<Input
							labelText='Author name'
							placeHolderText='Enter author name...'
							value={authorName}
							onChange={setAuthorName}
							id='authorName'
						/>
						<Button buttonText='Create author' />
					</div>
					<div className={styles.right}></div>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;

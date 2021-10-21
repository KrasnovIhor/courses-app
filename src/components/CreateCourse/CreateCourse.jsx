import { useState } from 'react';

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';

import { pipeDuration } from '../../helpers/pipeDuration';

import {
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_DELETE_AUTHOR,
	LABEL_TEXT_TITLE,
	LABEL_TEXT_DESCRIPTION,
	LABEL_TEXT_DURATION,
	LABEL_TEXT_AUTHOR_NAME,
	INPUT_PLACEHOLDER_TITLE,
	INPUT_PLACEHOLDER_DESCRIPTION,
	INPUT_PLACEHOLDER_DURATION,
	INPUT_PLACEHOLDER_AUTHOR_NAME,
	mockedAuthorsList,
	mockedCoursesList,
} from '../../constants';

import styles from './CreateCourse.module.scss';

const CreateCourse = ({ history }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthors] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const authors = courseAuthors.map((author) => author.id);
		const course = {
			id: uuidv4(),
			title,
			description,
			creationDate: moment().format('D/M/YYYY'),
			duration: parseInt(duration, 10),
			authors,
		};

		for (const key in course) {
			if (!course[key] || !authors.length) {
				alert('All fields should be fill in!');
				return;
			}
		}

		mockedCoursesList.push(course);

		history.push('/');
	};

	const handleAddAuthor = () => {
		if (authorName.length < 2) {
			alert('Author name should be at least 2 characters');
			return;
		}

		const newAuthor = {
			id: uuidv4(),
			name: authorName,
		};

		setAuthors([...authorsList, newAuthor]);
		mockedAuthorsList.push(newAuthor);
		setAuthorName('');
	};

	const handleCourseAuthor = ({ id, name }) => {
		const authorObj = {
			id,
			name,
		};

		setCourseAuthors([...courseAuthors, authorObj]);
		setAuthors([...authorsList].filter((author) => author.id !== id));
	};

	const handleDeleteAuthor = ({ id, name }) => {
		const deletedAuthor = {
			id,
			name,
		};

		setCourseAuthors([...courseAuthors].filter((author) => author.id !== id));
		setAuthors([...authorsList, deletedAuthor]);
	};

	return (
		<div className={styles.createCourse}>
			<form onSubmit={handleSubmit}>
				<div className={styles.row}>
					<Input
						onChange={setTitle}
						value={title}
						labelText={LABEL_TEXT_TITLE}
						placeHolderText={INPUT_PLACEHOLDER_TITLE}
						id='title'
					/>
					<Button type='submit' buttonText={BUTTON_TEXT_CREATE_COURSE} />
				</div>
				<Input
					isTextarea
					onChange={setDescription}
					value={description}
					labelText={LABEL_TEXT_DESCRIPTION}
					placeHolderText={INPUT_PLACEHOLDER_DESCRIPTION}
					id='description'
				/>
				<div className={styles.addAuthor}>
					<div className={styles.authorName}>
						<h3>Add Author</h3>
						<Input
							labelText={LABEL_TEXT_AUTHOR_NAME}
							placeHolderText={INPUT_PLACEHOLDER_AUTHOR_NAME}
							value={authorName}
							onChange={setAuthorName}
							id='authorName'
						/>
						<Button
							onClick={handleAddAuthor}
							buttonText={BUTTON_TEXT_CREATE_AUTHOR}
						/>
					</div>
					<div className={styles.authors}>
						<h3>Authors</h3>
						<ul>
							{authorsList.map((author) => (
								<li key={author.id}>
									<span>{author.name}</span>
									<Button
										onClick={() => handleCourseAuthor(author)}
										buttonText={BUTTON_TEXT_ADD_AUTHOR}
									/>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.duration}>
						<h3>Duration</h3>
						<Input
							value={duration}
							type='number'
							onChange={setDuration}
							labelText={LABEL_TEXT_DURATION}
							placeHolderText={INPUT_PLACEHOLDER_DURATION}
						/>
						<h2>
							Duration: <span>{pipeDuration(duration)}</span> hours
						</h2>
					</div>
					<div className={styles.courseAuthors}>
						<h3>Course authors</h3>
						{courseAuthors.length ? (
							<ul>
								{courseAuthors.map((author) => (
									<li key={author.id}>
										<span>{author.name}</span>
										<Button
											onClick={() => handleDeleteAuthor(author)}
											buttonText={BUTTON_TEXT_DELETE_AUTHOR}
										/>
									</li>
								))}
							</ul>
						) : (
							<p>Authors list is empty</p>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateCourse;

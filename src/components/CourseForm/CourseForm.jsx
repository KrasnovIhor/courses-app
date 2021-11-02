import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { addAuthorThunk, fetchAuthorsThunk } from '../../store/authors/thunk';
import { addCourseThunk, updateCourseThunk } from '../../store/courses/thunk';

import { getAuthors, getCourses, getUser } from '../../store/selectors';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';

import { pipeDuration } from '../../helpers/pipeDuration';

import {
	BUTTON_TEXT_ADD_AUTHOR,
	BUTTON_TEXT_CREATE_AUTHOR,
	BUTTON_TEXT_CREATE_COURSE,
	BUTTON_TEXT_UPDATE_COURSE,
	BUTTON_TEXT_DELETE_AUTHOR,
	LABEL_TEXT_TITLE,
	LABEL_TEXT_DESCRIPTION,
	LABEL_TEXT_DURATION,
	LABEL_TEXT_AUTHOR_NAME,
	INPUT_PLACEHOLDER_TITLE,
	INPUT_PLACEHOLDER_DESCRIPTION,
	INPUT_PLACEHOLDER_DURATION,
	INPUT_PLACEHOLDER_AUTHOR_NAME,
} from '../../constants';

import styles from './CourseForm.module.scss';

const CourseForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [authorName, setAuthorName] = useState('');
	const [authors, setAuthors] = useState([]);
	const [courseAuthors, setCourseAuthors] = useState([]);
	const [duration, setDuration] = useState('');
	const [isUpdating, setUpdating] = useState(false);

	const coursesList = useSelector(getCourses);
	const authorsList = useSelector(getAuthors);
	const { token } = useSelector(getUser);

	const dispatch = useDispatch();

	const history = useHistory();
	const { courseId } = useParams();

	const handleSubmit = (e) => {
		e.preventDefault();

		const authors = courseAuthors.map((author) => author.id);
		const course = {
			title,
			description,
			duration: parseInt(duration, 10),
			authors,
		};

		for (const key in course) {
			if (!course[key] || !authors.length) {
				alert('All fields should be fill in!');
				return;
			}
		}

		isUpdating
			? dispatch(updateCourseThunk(courseId, course, token))
			: dispatch(addCourseThunk(course, token));

		history.push('/courses');
	};

	const handleAddAuthor = () => {
		if (authorName.length < 2) {
			alert('Author name should be at least 2 characters');
			return;
		}

		dispatch(addAuthorThunk(authorName, token));
		setAuthors(authorsList);

		setAuthorName('');
	};

	const handleCourseAuthor = ({ id, name }) => {
		const authorObj = {
			id,
			name,
		};

		setCourseAuthors([...courseAuthors, authorObj]);
		setAuthors(authors.filter((author) => author.id !== id));
	};

	const handleDeleteAuthor = ({ id, name }) => {
		const deletedAuthor = {
			id,
			name,
		};

		setCourseAuthors(courseAuthors.filter((author) => author.id !== id));

		setAuthors([...authors, deletedAuthor]);
	};

	const handleNumberInput = ({ target: { value } }) => {
		if (value < 0) return;
		setDuration(value);
	};

	useEffect(() => {
		if (authorsList.length) {
			setAuthors(authorsList);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (!authorsList.length) {
			dispatch(fetchAuthorsThunk);
			setAuthors(authorsList);
		}
	}, [dispatch, authorsList]);

	useEffect(() => {
		if (history.location.pathname.includes('update')) {
			setUpdating(true);
		} else {
			setUpdating(false);
		}
	}, [history.location.pathname]);

	useEffect(() => {
		if (isUpdating) {
			const { title, description, duration, authors } = coursesList.find(
				(course) => course.id === courseId
			);
			const newCourseAuthors = authorsList.filter((author) =>
				authors.find((el) => author.id === el)
			);
			const newAuthors = authorsList.filter(
				(author) => !authors.find((el) => author.id === el) && author
			);

			setTitle(title);
			setDescription(description);
			setDuration(duration);
			setCourseAuthors(newCourseAuthors);
			setAuthors(newAuthors);
		} else {
			setAuthors(authorsList);
		}
	}, [courseId, coursesList, isUpdating, authorsList]);

	return (
		<div className={styles.createCourse}>
			<form onSubmit={handleSubmit}>
				<div className={styles.row}>
					<Input
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						labeltext={LABEL_TEXT_TITLE}
						placeholder={INPUT_PLACEHOLDER_TITLE}
						id='title'
					/>
					<Button
						type='submit'
						children={
							isUpdating ? BUTTON_TEXT_UPDATE_COURSE : BUTTON_TEXT_CREATE_COURSE
						}
					/>
				</div>
				<Textarea
					onChange={(e) => setDescription(e.target.value)}
					value={description}
					labeltext={LABEL_TEXT_DESCRIPTION}
					placeholder={INPUT_PLACEHOLDER_DESCRIPTION}
					id='description'
				/>
				<div className={styles.addAuthor}>
					<div className={styles.authorName}>
						<h3>Add Author</h3>
						<Input
							labeltext={LABEL_TEXT_AUTHOR_NAME}
							placeholder={INPUT_PLACEHOLDER_AUTHOR_NAME}
							value={authorName}
							onChange={(e) => setAuthorName(e.target.value)}
							id='authorName'
						/>
						<Button
							onClick={handleAddAuthor}
							type='button'
							children={BUTTON_TEXT_CREATE_AUTHOR}
						/>
					</div>
					<div className={styles.authors}>
						<h3>Authors</h3>
						<ul>
							{authors.map((author) => (
								<li key={author?.id}>
									<span>{author?.name}</span>
									<Button
										onClick={() => handleCourseAuthor(author)}
										type='button'
										children={BUTTON_TEXT_ADD_AUTHOR}
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
							onChange={handleNumberInput}
							labeltext={LABEL_TEXT_DURATION}
							placeholder={INPUT_PLACEHOLDER_DURATION}
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
									<li key={author?.id}>
										<span>{author?.name}</span>
										<Button
											onClick={() => handleDeleteAuthor(author)}
											children={BUTTON_TEXT_DELETE_AUTHOR}
											type='button'
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

export default CourseForm;

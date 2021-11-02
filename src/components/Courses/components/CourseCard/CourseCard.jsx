import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { getUser } from '../../../../store/selectors';

import { deleteCourseThunk } from '../../../../store/courses/thunk';

import { Button } from '../../../../common/Button/Button';
import { BUTTON_TEXT_SHOW_COURSE } from '../../../../constants';

import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pickAuthorsToString } from '../../../../helpers/pickAuthors';
import { pipeDuration } from '../../../../helpers/pipeDuration';

import PropTypes from 'prop-types';

import styles from './CourseCard.module.scss';

const CourseCard = ({
	course: { title, description, authors, duration, creationDate, id },
	authorsList,
}) => {
	const removeIcon = <i className='fas fa-trash'></i>;
	const editIcon = <i className='fas fa-pen'></i>;

	const { role, token } = useSelector(getUser);

	const dispatch = useDispatch();

	const handleDeleteCourse = () => {
		dispatch(deleteCourseThunk(id, token));
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.info}>
				<ul>
					<li>
						<span>Author:</span> {pickAuthorsToString(authors, authorsList)}
					</li>
					<li>
						<span>Duration:</span> {pipeDuration(duration)} hours
					</li>
					<li>
						<span>Created:</span> {dateGenerator(creationDate)}
					</li>
				</ul>
				<div className={styles.buttons}>
					<Link className={styles.button} to={`courses/${id}`}>
						<Button children={BUTTON_TEXT_SHOW_COURSE} />
					</Link>
					{role === 'admin' && (
						<>
							<Link to={`/courses/update/${id}`}>
								<Button children={editIcon} />
							</Link>
							<Button onClick={handleDeleteCourse} children={removeIcon} />
						</>
					)}
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	course: PropTypes.object.isRequired,
	authorsList: PropTypes.array.isRequired,
};

CourseCard.defaultProps = {
	course: {},
	authorsList: [],
};

export default CourseCard;

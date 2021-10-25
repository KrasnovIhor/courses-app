import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import { Link } from 'react-router-dom';

import { mockedAuthorsList, mockedCoursesList } from '../../constants';

import { dateGenerator } from '../../helpers/dateGenerator';
import { pickAuthors } from '../../helpers/pickAuthors';
import { pipeDuration } from '../../helpers/pipeDuration';

import styles from './CourseInfo.module.scss';

const CourseInfo = () => {
	const { courseId } = useParams();
	const [course, setCourse] = useState({});

	const myCourse = mockedCoursesList.find(
		(course) => course.title.toLowerCase() === courseId
	);

	useEffect(() => {
		setCourse(myCourse);
	}, [myCourse]);

	return (
		<div className={styles.course}>
			<Link className={styles.link} to='/courses'>
				Back to courses
			</Link>
			<h1>{course.title}</h1>
			<div className={styles.info}>
				<div className={styles.description}>
					<p>{course.description}</p>
				</div>
				<div className={styles.sidebar}>
					<ul>
						<li>
							<span>ID:</span> {course.id}
						</li>
						<li>
							<span>Duration:</span> {pipeDuration(course.duration)} hours
						</li>
						<li>
							<span>Created:</span> {dateGenerator(course.creationDate)}
						</li>
						<li>
							<span>Authors:</span>
							<ul className={styles.authors}>
								{pickAuthors(course.authors, mockedAuthorsList, true).map(
									(author) => (
										<li key={author.id}>{author.name}</li>
									)
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;

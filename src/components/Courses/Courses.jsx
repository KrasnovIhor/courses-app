import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import { fetchCoursesAll, fetchAuthors } from '../../services';

import { addAuthors } from '../../store/authors/actionCreators';
import { addCoursesAll } from '../../store/courses/actionCreators';

import { getCourses, getAuthors } from '../../store/selectors';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './Courses.module.scss';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const dispatch = useDispatch();

	const regex = useMemo(() => new RegExp(searchQuery, 'gi'), [searchQuery]);

	const searchedCourses = courses.filter(
		(course) => course.title.match(regex) || course.id.match(regex)
	);

	const list = !searchQuery ? courses : searchedCourses;

	useEffect(() => {
		const myFetch = async () => {
			if (!courses.length) {
				const fetchedCourses = await fetchCoursesAll();

				dispatch(addCoursesAll(fetchedCourses));
			}
		};

		myFetch();
	}, [dispatch, courses.length]);

	useEffect(() => {
		const myFetch = async () => {
			if (!authors.length) {
				const fetchedAuthors = await fetchAuthors();

				dispatch(addAuthors(fetchedAuthors));
			}
		};

		myFetch();
	}, [dispatch, authors.length]);

	return (
		<div className={styles.courses}>
			<SearchBar handleSearch={setSearchQuery} />
			<ul>
				{list.map((course) => (
					<li key={course.id}>
						<CourseCard course={course} authorsList={authors} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Courses;

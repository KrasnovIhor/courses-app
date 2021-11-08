import { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCoursesThunk } from '../../store/courses/thunk';
import { fetchAuthorsThunk } from '../../store/authors/thunk';

import {
	getCourses,
	getAuthors,
	isFetchingCourses,
	isErrorCourses,
} from '../../store/selectors';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './Courses.module.scss';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const isFetching = useSelector(isFetchingCourses);
	const isError = useSelector(isErrorCourses);
	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);

	const dispatch = useDispatch();

	const regex = useMemo(() => new RegExp(searchQuery, 'gi'), [searchQuery]);

	const searchedCourses = courses.filter(
		(course) => course.title.match(regex) || course.id.match(regex)
	);

	const list = !searchQuery ? courses : searchedCourses;

	useEffect(() => {
		if (!courses.length) {
			dispatch(fetchCoursesThunk);
			dispatch(fetchAuthorsThunk);
		}
	}, [courses.length, dispatch]);

	if (isFetching) {
		return null;
	}

	if (isError) {
		return <h1>Error while loading courses!</h1>;
	}

	return (
		<div data-testid='courses' className={styles.courses}>
			<SearchBar handleSearch={setSearchQuery} />
			<ul data-testid='courses-container'>
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

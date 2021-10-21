import { useState } from 'react';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './Courses.module.scss';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const regex = new RegExp(searchQuery, 'gi');
	const searchedCourses = mockedCoursesList.filter(
		(course) => course.title.match(regex) || course.id.match(regex)
	);

	console.log(mockedCoursesList);

	return (
		<div className={styles.courses}>
			<SearchBar handleSearch={setSearchQuery} />
			<ul>
				{!searchQuery
					? mockedCoursesList.map((course) => (
							<li key={course.id}>
								<CourseCard course={course} authorsList={mockedAuthorsList} />
							</li>
					  ))
					: searchedCourses.map((course) => (
							<li key={course.id}>
								<CourseCard course={course} authorsList={mockedAuthorsList} />
							</li>
					  ))}
			</ul>
		</div>
	);
};

export default Courses;

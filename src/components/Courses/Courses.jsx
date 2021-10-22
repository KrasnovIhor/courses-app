import { useMemo, useState } from 'react';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';

import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';

import styles from './Courses.module.scss';

const Courses = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const regex = useMemo(() => new RegExp(searchQuery, 'gi'), [searchQuery]);

	const searchedCourses = mockedCoursesList.filter(
		(course) => course.title.match(regex) || course.id.match(regex)
	);

	const list = !searchQuery ? mockedCoursesList : searchedCourses;

	return (
		<div className={styles.courses}>
			<SearchBar handleSearch={setSearchQuery} />
			<ul>
				{list.map((course) => (
					<li key={course.id}>
						<CourseCard course={course} authorsList={mockedAuthorsList} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Courses;

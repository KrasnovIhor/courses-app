import CourseCard from '../CourseCard';

import { renderWithReduxAndRouter } from '../../../../../store/tests/MockedProvider';

const mockedState = {
	courses: {
		courses: [
			{
				id: '1',
				title: 'JavaScript',
				description: 'description11',
				duration: 200,
				creationDate: '02/11/2021',
				authors: ['1', '2'],
			},
			{
				id: '2',
				title: 'Vue',
				description: 'description22',
				duration: 120,
				creationDate: '02/11/2021',
				authors: ['1', '2'],
			},
		],
	},

	authors: {
		authors: [
			{
				name: 'author1',
				id: '1',
			},
			{
				name: 'author2',
				id: '2',
			},
		],
	},
};

describe('CourseCard', () => {
	it('displays a title', () => {
		const { getByText } = renderWithReduxAndRouter(
			<CourseCard
				course={mockedState.courses.courses[0]}
				authorsList={mockedState.authors.authors}
			/>
		);

		expect(getByText(/JavaScript/i)).toBeInTheDocument();
	});

	it('displays a description', () => {
		const { getByText } = renderWithReduxAndRouter(
			<CourseCard
				course={mockedState.courses.courses[0]}
				authorsList={mockedState.authors.authors}
			/>
		);

		expect(getByText(/description11/i)).toBeInTheDocument();
	});

	it('displays a duration in correct format', () => {
		const { getByTestId } = renderWithReduxAndRouter(
			<CourseCard
				course={mockedState.courses.courses[0]}
				authorsList={mockedState.authors.authors}
			/>
		);

		expect(getByTestId('duration')).toHaveTextContent('03:20 hours');
	});

	it('displays authors list', () => {
		const { getByTestId } = renderWithReduxAndRouter(
			<CourseCard
				course={mockedState.courses.courses[0]}
				authorsList={mockedState.authors.authors}
			/>
		);

		expect(getByTestId('authors-list')).toHaveTextContent('author1, author2');
	});

	it('displays created date in the correct format', () => {
		const { getByTestId } = renderWithReduxAndRouter(
			<CourseCard
				course={mockedState.courses.courses[0]}
				authorsList={mockedState.authors.authors}
			/>
		);

		expect(getByTestId('created-at')).toHaveTextContent('02.11.2021');
	});
});

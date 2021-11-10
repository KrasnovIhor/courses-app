import Courses from '../Courses';
import App from '../../../App';

import userEvent from '@testing-library/user-event';

import { renderWithReduxAndRouter } from '../../../store/tests/MockedProvider';
import { mockedState, initialMockedState } from '../../../mock';

const mockedStore = {
	getState: () => initialMockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

const {
	courses: { courses },
} = mockedState;

describe('Courses', () => {
	it('should display amount of CourseCard equal length of courses array', () => {
		const { getAllByTestId } = renderWithReduxAndRouter(<Courses />);

		expect(getAllByTestId('course-card').length).toEqual(courses.length);
	});

	it('should display Empty container if courses array length is 0', () => {
		const { getByTestId } = renderWithReduxAndRouter(<Courses />, mockedStore);

		expect(getByTestId('courses-container')).toBeEmptyDOMElement();
	});

	it(' CourseForm should be showed after a click on a button "Add new course"', () => {
		const { getByTestId, queryByTestId } = renderWithReduxAndRouter(<App />);

		expect(getByTestId('courses')).toBeInTheDocument();

		userEvent.click(getByTestId('add-course-link'));

		expect(queryByTestId('courses')).not.toBeInTheDocument();
		expect(getByTestId('course-form')).toBeInTheDocument();
	});
});

import CourseForm from '../CourseForm';

import userEvent from '@testing-library/user-event';

import {
	initMockedStore,
	renderWithReduxAndRouter,
} from '../../../store/tests/MockedProvider';
import { INPUT_PLACEHOLDER_AUTHOR_NAME } from '../../../constants';
import { initialMockedState } from '../../../mock';

const store = initMockedStore(initialMockedState);

describe('CourseForm', () => {
	it('should show authors list if there is at least one author', () => {
		const { getByTestId, queryByText } = renderWithReduxAndRouter(
			<CourseForm />
		);

		expect(getByTestId('all-authors')).toBeInTheDocument();
		expect(queryByText('Authors list is empty')).not.toBeInTheDocument();
	});

	it('should show course authors list if there is at least one course author', () => {
		const { getByTestId, queryByText } = renderWithReduxAndRouter(
			<CourseForm />
		);

		userEvent.click(getByTestId('add-course-author-button1'));

		expect(getByTestId('course-authors')).toBeInTheDocument();
		expect(
			queryByText(/course authors list is empty/i)
		).not.toBeInTheDocument();
	});

	it('should show string "Authors list is empty" if there is no authors', () => {
		const { getByText, queryByTestId } = renderWithReduxAndRouter(
			<CourseForm />,
			store
		);

		expect(queryByTestId('all-authors')).not.toBeInTheDocument();
		expect(getByText('Authors list is empty')).toBeInTheDocument();
	});

	it('should show string "Course authors list is empty" if there is no course authors', () => {
		const { getByText, queryByTestId } = renderWithReduxAndRouter(
			<CourseForm />,
			store
		);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();
		expect(getByText(/course authors list is empty/i)).toBeInTheDocument();
	});

	it('"Create author" click button should call dispatch', () => {
		const {
			getByText,
			getByPlaceholderText,
			store: { dispatch },
		} = renderWithReduxAndRouter(<CourseForm />);

		userEvent.type(getByPlaceholderText(INPUT_PLACEHOLDER_AUTHOR_NAME), 'Test');
		userEvent.click(getByText(/create author/i));

		expect(dispatch).toHaveBeenCalled();
	});

	it('"Add author" button click should add an author to course authors list', () => {
		const { getByTestId, queryByTestId } = renderWithReduxAndRouter(
			<CourseForm />
		);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();

		userEvent.click(getByTestId('add-course-author-button1'));
		expect(getByTestId('course-authors')).toBeInTheDocument();
	});

	it('"Delete author" button click should delete an author from the course list', () => {
		const { getByTestId, queryByTestId } = renderWithReduxAndRouter(
			<CourseForm />
		);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();

		userEvent.click(getByTestId('add-course-author-button1'));
		expect(getByTestId('course-authors')).toBeInTheDocument();

		userEvent.click(getByTestId('delete-course-author-button1'));
		expect(queryByTestId('course-authors')).not.toBeInTheDocument();
	});
});

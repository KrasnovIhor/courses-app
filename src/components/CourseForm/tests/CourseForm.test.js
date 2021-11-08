import CourseForm from '../CourseForm';

import { renderWithReduxAndRouter } from '../../../store/tests/MockedProvider';
import userEvent from '@testing-library/user-event';
import { INPUT_PLACEHOLDER_AUTHOR_NAME } from '../../../constants';

describe('CourseForm', () => {
	it('should show authors lists (all and course authors)', () => {
		const { getByTestId, getByText, queryByTestId, queryByText } =
			renderWithReduxAndRouter(<CourseForm />);

		const allAuthors = queryByTestId('all-authors');
		const courseAuthors = queryByTestId('course-authors');

		if (!courseAuthors) {
			expect(queryByTestId('course-authors')).not.toBeInTheDocument();
			expect(getByText(/course authors list is empty/i)).toBeInTheDocument();
		} else {
			expect(getByTestId('course-authors')).toBeInTheDocument();
			expect(
				queryByText(/course authors list is empty/i)
			).not.toBeInTheDocument();
		}

		if (!allAuthors) {
			expect(queryByTestId('all-authors')).not.toBeInTheDocument();
			expect(getByText('Authors list is empty')).toBeInTheDocument();
		} else {
			expect(getByTestId('all-authors')).toBeInTheDocument();
			expect(queryByText('Authors list is empty')).not.toBeInTheDocument();
		}
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
		const { getByTestId, getAllByTestId, queryByTestId } =
			renderWithReduxAndRouter(<CourseForm />);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();

		userEvent.click(getAllByTestId('add-course-author-button')[0]);

		expect(getByTestId('course-authors')).toBeInTheDocument();
	});

	it('"Delete author" button click should delete an author from the course list', () => {
		const { getByTestId, getAllByTestId, queryByTestId } =
			renderWithReduxAndRouter(<CourseForm />);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();

		userEvent.click(getAllByTestId('add-course-author-button')[0]);

		expect(getByTestId('course-authors')).toBeInTheDocument();

		userEvent.click(getAllByTestId('delete-course-author-button')[0]);

		expect(queryByTestId('course-authors')).not.toBeInTheDocument();
	});
});

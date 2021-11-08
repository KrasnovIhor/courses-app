import Header from '../Header';
import {
	initMockedStore,
	renderWithReduxAndRouter,
} from '../../../store/tests/MockedProvider';

const mockedState = {
	user: {
		isAuth: true,
		isFetching: false,
		isError: false,
		name: 'Test',
		email: 'test@mail.com',
		token:
			'Bearer hZLBryP9Q/DL9RXmYolTgplRj8KHHtT0Hou81qQJvaOpAfqQFxBmpLHNFVkBpIHUYcg7jsxoj/m/V7xws5D/WAiYLur+Ocv6uKOdohnH7mjKioJxxjWhD7ZFrXCxhEFh87YS62GrFm3hzy3EPD+wg8f0G/9GAlyKCtlV5iza+CWy+nW7oO4TagzSsAubTOJpqVECszYxdnHlHUgFEv++UlGOrJaU4MRjfjtzuzu8LhkD/XJvOz1Ho4/iKqfw/g+46rW4yb/dHcME20b6eISHnk5yxYv+Owor8eCb3tc8gAsiu3/QjHgM6dR+XuJXe/qKWFhz+xaETv5pK/PpfcJBRQ==',
		role: 'user',
	},
};

const mockedStore = initMockedStore(mockedState);

describe('Header', () => {
	it('has a logo', () => {
		const { getByTestId } = renderWithReduxAndRouter(<Header pathname='/' />);

		expect(getByTestId('logo')).toBeInTheDocument();
	});

	it('has a user name when logged in', () => {
		const { getByTestId } = renderWithReduxAndRouter(
			<Header pathname='/courses' />,
			mockedStore
		);

		expect(getByTestId('user-name')).toHaveTextContent('Test');
	});

	it('does not have a user name when logged out', () => {
		const { queryByTestId } = renderWithReduxAndRouter(
			<Header pathname='/login' />
		);

		expect(queryByTestId('user-name')).not.toBeInTheDocument();
	});
});

import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { mockedState } from '../../mock';

export const initMockedStore = (mockedState) => {
	return {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

export const renderWithReduxAndRouter = (component, store = mockedStore) => {
	return {
		...render(
			<Provider store={store}>
				<BrowserRouter>{component}</BrowserRouter>
			</Provider>
		),
		store,
	};
};

import { combineReducers } from 'redux';

import coursesReducer from './courses/reducer';
import userReducer from './user/reducer';
import authorsReducer from './authors/reducer';

const rootReducer = combineReducers({
	user: userReducer,
	courses: coursesReducer,
	authors: authorsReducer,
});

export default rootReducer;

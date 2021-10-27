import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { fetchUser } from './services';

import {
	addUser,
	addUserRequest,
	addUserReject,
} from './store/user/actionCreators';
import { getUser } from './store/selectors';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
	const { isAuth, isUserLoaded } = useSelector(getUser);

	const dispatch = useDispatch();

	const location = useLocation();

	useEffect(() => {
		if (isAuth) return;

		const myFetch = async () => {
			try {
				const token = localStorage.getItem('token');

				if (token) {
					dispatch(addUserRequest());

					const user = await fetchUser(token);
					dispatch(addUser(user));
				}
			} catch (error) {
				dispatch(addUserReject());
				console.error(error);
			}
		};

		myFetch();
	}, [isAuth, dispatch]);

	if (!isUserLoaded) {
		return null;
	}

	return (
		<div className='container'>
			<Header {...location} />
			<Switch>
				{/* <Route path='/'>
					{isAuth ? <Redirect exact to='/' /> : <Redirect to='/login' />}
				</Route> */}
				<Route exact path='/courses' component={Courses} />
				<Route exact path='/'>
					{isAuth ? <Redirect to='/courses' /> : <Redirect to='/login' />}
				</Route>
				<Route path='/courses/add' component={CreateCourse} />
				<Route path='/courses/:courseId' component={CourseInfo} />
				<Route path='/registration' component={Registration} />
				<Route path='/login'>
					{isAuth ? <Redirect to='/courses' /> : <Login />}
				</Route>
			</Switch>
		</div>
	);
};

export default App;

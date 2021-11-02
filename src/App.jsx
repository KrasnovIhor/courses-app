import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { loadUser } from './store/user/thunk';

import { getUser } from './store/selectors';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CourseForm from './components/CourseForm/CourseForm';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
	const { isAuth, isFetching, isError } = useSelector(getUser);

	const dispatch = useDispatch();

	const location = useLocation();

	useEffect(() => {
		if (isAuth) return;

		const token = localStorage.getItem('token');

		if (token) {
			dispatch(loadUser(token));
		}
	}, [isAuth, dispatch]);

	if (isFetching) {
		return null;
	}

	if (isError) {
		return <h1>User wasn't loaded due to some error</h1>;
	}

	return (
		<div className='container'>
			<Header {...location} />
			<Switch>
				<Route exact path='/courses'>
					{isAuth ? <Courses /> : <Redirect to='/login' />}
				</Route>
				<Route exact path='/'>
					{isAuth ? <Redirect to='/courses' /> : <Redirect to='/login' />}
				</Route>
				<PrivateRoute path='/courses/add' component={CourseForm} />
				<PrivateRoute path='/courses/update/:courseId' component={CourseForm} />
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

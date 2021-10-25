import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { Switch, Route, Redirect } from 'react-router-dom';

import './App.scss';
import 'normalize.css';

const App = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		try {
			const token = localStorage.getItem('token');

			if (!token) {
				setLoggedIn(false);
			} else {
				setLoggedIn(true);
			}
		} catch (error) {
			console.error(error);
		}
	}, [history]);
	return (
		<div className='container'>
			<Header {...location} />
			<Switch>
				<Route exact path='/courses' component={Courses} />
				<Route exact path='/'>
					{loggedIn ? <Redirect to='/courses' /> : <Redirect to='/login' />}
				</Route>
				<Route path='/courses/add' component={CreateCourse} />
				<Route path='/courses/:courseId' component={CourseInfo} />
				<Route path='/registration' component={Registration} />
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	);
};

export default App;

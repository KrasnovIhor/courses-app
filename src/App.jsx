import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { getUser } from './store/selectors';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { Switch, Route, Redirect } from 'react-router-dom';

// import { fetchCoursesAll, fetchUser } from './services';

import './App.scss';
import 'normalize.css';
import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
	const [isLoggedIn, setLoggedIn] = useState(false);

	const userInfo = useSelector(getUser);

	const location = useLocation();

	useEffect(() => {
		if (!userInfo.isAuth) {
			setLoggedIn(false);
		} else {
			setLoggedIn(true);
		}
	}, [userInfo]);
	return (
		<div className='container'>
			<Header {...location} />
			<Switch>
				<Route exact path='/courses' component={Courses} />
				<Route exact path='/'>
					{isLoggedIn ? <Redirect to='/courses' /> : <Redirect to='/login' />}
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

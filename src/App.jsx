import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';

import { Switch, Route } from 'react-router-dom';

import './App.scss';
import 'normalize.css';

const App = () => {
	const history = useHistory();
	const location = useLocation();

	useEffect(() => {
		try {
			const token = localStorage.getItem('token');

			if (token) {
				history.push('/courses');
			} else {
				history.push('/registration');
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
				<Route path='/courses/add' component={CreateCourse} />
				<Route path='/registration' component={Registration} />
				<Route path='/login' component={Login} />
			</Switch>
		</div>
	);
};

export default App;

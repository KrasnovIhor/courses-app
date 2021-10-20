import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import CreateCourse from './components/CreateCourse/CreateCourse';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';
import 'normalize.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<Header />
				<Switch>
					<Route exact path='/' component={Courses} />
					<Route path='/create' component={CreateCourse} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;

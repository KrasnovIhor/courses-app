import './App.scss';
import Courses from './components/Courses/Courses';
import Header from './components/Header/Header';
import 'normalize.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CreateCourse from './components/CreateCourse/CreateCourse';

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

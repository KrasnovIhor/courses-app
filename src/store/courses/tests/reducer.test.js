import coursesReducer from '../reducer';
import { addCourse, loadCourses } from '../actionCreators';

describe('courseReducer tests', () => {
	test('should return the initial state on init', () => {
		const state = coursesReducer(undefined, { type: '@@INIT' });

		expect(state).toEqual({
			courses: [],
			isFetching: false,
			isError: false,
		});
	});

	test('should return the initial state on an unknown action type', () => {
		const action = {
			type: 'courses/unknown',
		};
		const state = coursesReducer(undefined, action);

		expect(state).toEqual({
			courses: [],
			isFetching: false,
			isError: false,
		});
	});

	test('should handle LOAD_COURSES and returns new state', () => {
		const currentState = {
			courses: [
				{
					id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
					title: 'JavaScript',
					description: `Lorem Ipsum is simply dummy text of the printing and
			typesetting industry. Lorem Ipsum
			has been the industry's standard dummy text ever since the
			1500s, when an unknown
			printer took a galley of type and scrambled it to make a type
			specimen book. It has survived
			not only five centuries, but also the leap into electronic
			typesetting, remaining essentially u
			nchanged.`,
					creationDate: '8/3/2021',
					duration: 160,
					authors: [
						'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
						'f762978b-61eb-4096-812bebde22838167',
					],
				},
				{
					id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
					title: 'Angular',
					description: `Lorem Ipsum is simply dummy text of the printing and
			typesetting industry. Lorem Ipsum
			has been the industry's standard dummy text ever since the
			1500s, when an unknown
			printer took a galley of type and scrambled it to make a type
			specimen book.`,
					creationDate: '10/11/2020',
					duration: 210,
					authors: [
						'df32994e-b23d-497c-9e4d-84e4dc02882f',
						'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
					],
				},
			],
			isFetching: false,
			isError: false,
		};
		const newCourse = {
			id: '11',
			title: 'test',
			description: `testtest`,
			creationDate: '10/11/2020',
			duration: 100,
			authors: ['333', '444'],
		};

		const state = coursesReducer(currentState, addCourse(newCourse));

		expect(state).toEqual({
			courses: [
				{
					id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
					title: 'JavaScript',
					description: `Lorem Ipsum is simply dummy text of the printing and
			typesetting industry. Lorem Ipsum
			has been the industry's standard dummy text ever since the
			1500s, when an unknown
			printer took a galley of type and scrambled it to make a type
			specimen book. It has survived
			not only five centuries, but also the leap into electronic
			typesetting, remaining essentially u
			nchanged.`,
					creationDate: '8/3/2021',
					duration: 160,
					authors: [
						'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
						'f762978b-61eb-4096-812bebde22838167',
					],
				},
				{
					id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
					title: 'Angular',
					description: `Lorem Ipsum is simply dummy text of the printing and
			typesetting industry. Lorem Ipsum
			has been the industry's standard dummy text ever since the
			1500s, when an unknown
			printer took a galley of type and scrambled it to make a type
			specimen book.`,
					creationDate: '10/11/2020',
					duration: 210,
					authors: [
						'df32994e-b23d-497c-9e4d-84e4dc02882f',
						'095a1817-d45b-4ed7-9cf7-b2417bcbf748',
					],
				},
				{
					id: '11',
					title: 'test',
					description: `testtest`,
					creationDate: '10/11/2020',
					duration: 100,
					authors: ['333', '444'],
				},
			],
			isFetching: false,
			isError: false,
		});
	});

	test('should handle LOAD_COURSES and returns new state', () => {
		const currentState = {
			courses: [],
			isFetching: false,
			isError: false,
		};
		const loadedCourses = [
			{
				id: '1',
				title: 'JavaScript',
				description: 'description11',
				duration: 200,
				creationDate: '02/11/2021',
				authors: ['1', '2'],
			},
			{
				id: '2',
				title: 'Vue',
				description: 'description22',
				duration: 120,
				creationDate: '02/11/2021',
				authors: ['1', '2'],
			},
		];

		const state = coursesReducer(currentState, loadCourses(loadedCourses));

		expect(state).toEqual({
			courses: [...loadedCourses],
			isFetching: false,
			isError: false,
		});
	});
});

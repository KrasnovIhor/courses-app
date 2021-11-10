export const mockedState = {
	user: {
		isAuth: true,
		isFetching: false,
		isError: false,
		name: 'Test',
		email: 'test@mail.com',
		token:
			'Bearer hZLBryP9Q/DL9RXmYolTgplRj8KHHtT0Hou81qQJvaOpAfqQFxBmpLHNFVkBpIHUYcg7jsxoj/m/V7xws5D/WAiYLur+Ocv6uKOdohnH7mjKioJxxjWhD7ZFrXCxhEFh87YS62GrFm3hzy3EPD+wg8f0G/9GAlyKCtlV5iza+CWy+nW7oO4TagzSsAubTOJpqVECszYxdnHlHUgFEv++UlGOrJaU4MRjfjtzuzu8LhkD/XJvOz1Ho4/iKqfw/g+46rW4yb/dHcME20b6eISHnk5yxYv+Owor8eCb3tc8gAsiu3/QjHgM6dR+XuJXe/qKWFhz+xaETv5pK/PpfcJBRQ==',
		role: 'admin',
	},

	courses: {
		isFetching: false,
		isError: false,
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
	},

	authors: {
		isFetching: false,
		isError: false,
		authors: [
			{
				id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				name: 'Vasiliy Dobkin',
			},
			{
				id: 'f762978b-61eb-4096-812b-ebde22838167',
				name: 'Nicolas Kim',
			},
			{
				id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
				name: 'Anna Sidorenko',
			},
			{
				id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
				name: 'Valentina Larina',
			},
		],
	},
};

export const initialMockedState = {
	courses: {
		isFetching: false,
		isError: false,
		courses: [],
	},
	authors: {
		authors: [],
		isFetching: false,
		isError: false,
	},
	user: {
		isAuth: false,
		isFetching: false,
		isError: false,
		name: '',
		email: '',
		token: '',
		role: '',
	},
};

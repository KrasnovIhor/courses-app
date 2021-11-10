import { useSelector } from 'react-redux';

import { Redirect, Route } from 'react-router';

import { getUser } from '../../store/selectors';

export default function PrivateRouter({ component: Component, ...rest }) {
	const user = useSelector(getUser);

	return (
		<Route
			{...rest}
			render={(props) =>
				user.role === 'admin' ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/courses',
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	);
}

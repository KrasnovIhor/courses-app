import classNames from 'classnames';
import styles from './Button.module.scss';

import PropTypes from 'prop-types';

export const Button = (props) => {
	return (
		<button {...props} className={classNames(styles.button, props.className)} />
	);
};

Button.propTypes = {
	children: PropTypes.node,
};

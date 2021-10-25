import classNames from 'classnames';
import styles from './Input.module.scss';

import PropTypes from 'prop-types';

export const Input = (props) => {
	return (
		<div className={props.className}>
			{props.labeltext && (
				<label className={styles.label} htmlFor={props.id}>
					{props.labeltext}
				</label>
			)}
			<input {...props} className={classNames(styles.input, props.className)} />
		</div>
	);
};

Input.propTypes = {
	labeltext: PropTypes.string,
};

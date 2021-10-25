import classNames from 'classnames';
import styles from './Textarea.module.scss';

import PropTypes from 'prop-types';

export const Textarea = (props) => {
	return (
		<div>
			{props.labeltext && (
				<label className={styles.label} htmlFor={props.id}>
					{props.labeltext}
				</label>
			)}
			<textarea
				{...props}
				className={classNames(styles.textarea, props.className)}
			/>
		</div>
	);
};

Textarea.propTypes = {
	labeltext: PropTypes.string,
};

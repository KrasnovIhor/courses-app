import styles from './Button.module.scss';

export const Button = ({ buttonText, onClick, type = 'button' }) => {
	return (
		<button type={type} className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
};

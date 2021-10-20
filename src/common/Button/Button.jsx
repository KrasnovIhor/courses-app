import styles from './Button.module.scss';

export const Button = ({ buttonText, onClick }) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{buttonText}
		</button>
	);
};

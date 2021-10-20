import styles from './Input.module.scss';

export const Input = ({
	labelText,
	placeHolderText,
	onChange,
	value,
	isTextarea,
	id = 'search',
	type = 'text',
}) => {
	return (
		<div>
			{labelText && (
				<label className={styles.label} htmlFor={id}>
					{labelText}
				</label>
			)}
			{!isTextarea ? (
				<input
					className={styles.input}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					id={id}
					type={type}
					placeholder={placeHolderText}
				/>
			) : (
				<textarea
					className={styles.textarea}
					value={value}
					onChange={(e) => onChange(e.target.value)}
					id={id}
					placeholder={placeHolderText}
				/>
			)}
		</div>
	);
};

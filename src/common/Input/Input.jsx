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
	const handleChange = ({ target: { value } }) => {
		if (type === 'number') {
			if (value < 0) return;
			onChange(value);
		} else {
			onChange(value);
		}
	};

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
					onChange={handleChange}
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

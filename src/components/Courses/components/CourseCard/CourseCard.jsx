import { Button } from '../../../../common/Button/Button';
import { dateGenerator } from '../../../../helpers/dateGenerator';
import { pickAuthors } from '../../../../helpers/pickAuthors';
import { pipeDuration } from '../../../../helpers/pipeDuration';

import styles from './CourseCard.module.scss';

const CourseCard = ({
	course: { title, description, authors, duration, creationDate },
	authorsList,
}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.body}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<div className={styles.info}>
				<ul>
					<li>
						<span>Author:</span> {pickAuthors(authors, authorsList)}
					</li>
					<li>
						<span>Duration:</span> {pipeDuration(duration)} hours
					</li>
					<li>
						<span>Created:</span> {dateGenerator(creationDate)}
					</li>
				</ul>
				<Button buttonText='Show course' />
			</div>
		</div>
	);
};

export default CourseCard;

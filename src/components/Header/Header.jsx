import { Button } from '../../common/Button/Button';
import { BUTTON_TEXT_LOGOUT } from '../../constants';

import { Logo } from './components/Logo/Logo';

import styles from './Header.module.scss';

const Header = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.info}>
				<p>Ihor</p>
				<Button buttonText={BUTTON_TEXT_LOGOUT} />
			</div>
		</header>
	);
};

export default Header;

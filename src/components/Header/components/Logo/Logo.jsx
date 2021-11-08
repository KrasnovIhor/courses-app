import logo from '../../../../assets/images/logo.png';
import styles from './Logo.module.scss';

export const Logo = () => {
	return (
		<img data-testid='logo' className={styles.logo} src={logo} alt='logo' />
	);
};

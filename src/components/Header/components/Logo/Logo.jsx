import logo from '../../../../assets/images/logo.png';
import styles from './Logo.module.scss';

export const Logo = () => {
	return <img className={styles.logo} src={logo} alt='logo' />;
};

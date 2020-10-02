import Link from 'components/Link/Link';
import { getGeneralSettings } from 'models/settings';
import styles from './Logo.module.sass';

export const Logo = () => {
  const { logo, brandName } = getGeneralSettings();

  return (
    <Link href="/">
      <a className={styles.logo}>
        {logo ? <img src={logo} title={brandName} /> : brandName}
      </a>
    </Link>
  );
};

export default Logo;

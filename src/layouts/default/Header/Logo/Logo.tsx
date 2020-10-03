import LocalisedLink from 'components/Link/LocalisedLink';
import { getGeneralSettings } from 'models/settings';
import styles from './Logo.module.scss';

export const Logo = () => {
  const { logo, brandName } = getGeneralSettings();

  return (
    <LocalisedLink href="/">
      <a className={styles.logo}>
        {logo ? <img src={`/${logo}`} title={brandName} /> : brandName}
      </a>
    </LocalisedLink>
  );
};

export default Logo;

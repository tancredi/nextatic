import LocalisedLink from 'components/Link/LocalisedLink';
import { getGeneralSettings } from 'models/settings';
import { getPage } from 'models/pages';
import { DEFAULT_PAGE_SLUG } from 'core/config';
import styles from './Logo.module.scss';

export const Logo = () => {
  const { logo, brandName } = getGeneralSettings();
  const defaultPage = getPage(DEFAULT_PAGE_SLUG);
  const { title } = defaultPage.attributes;

  return (
    <LocalisedLink href="/">
      <a className={styles.logo} title={`${brandName} | ${title}`}>
        {logo ? <img src={`/${logo}`} /> : brandName}
      </a>
    </LocalisedLink>
  );
};

export default Logo;

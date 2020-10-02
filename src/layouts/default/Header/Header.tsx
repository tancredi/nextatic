import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import Link from 'components/Link/Link';
import { getGeneralSettings } from 'models/settings';

const Header: FunctionComponent = () => {
  const generalSettings = getGeneralSettings();

  return (
    <header className={styles.main}>
      <PageSize>
        <Link href="/">
          <a className={styles.logo}>
            {generalSettings.brandName || 'My brand'}
          </a>
        </Link>
      </PageSize>
    </header>
  );
};

export default Header;

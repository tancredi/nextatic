import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import Link from 'components/Link/Link';
import { getContent } from 'utils/content';

const Header: FunctionComponent = () => {
  const generalSettings = getContent('settings', 'general', null, 'yml');

  return (
    <header className={styles.main}>
      <PageSize>
        <Link href="/">
          <a className={styles.logo}>{generalSettings.brand || 'My brand'}</a>
        </Link>
      </PageSize>
    </header>
  );
};

export default Header;

import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import { getNavigation } from 'models/navigation';
import useLocale from 'hooks/useLocale';
import Logo from './Logo/Logo';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';

const Header: FunctionComponent = () => (
  <header className={styles.main}>
    <PageSize className={styles.inner}>
      <Logo />

      <nav>
        <NavigationLinks links={getNavigation('header', useLocale()).links} />
      </nav>
    </PageSize>
  </header>
);

export default Header;

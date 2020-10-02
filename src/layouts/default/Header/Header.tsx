import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import { getHeaderNavigation } from 'models/navigation';
import Logo from './Logo/Logo';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';

const Header: FunctionComponent = () => (
  <header className={styles.main}>
    <PageSize>
      <Logo />

      <nav>
        <NavigationLinks links={getHeaderNavigation()} />
      </nav>
    </PageSize>
  </header>
);

export default Header;

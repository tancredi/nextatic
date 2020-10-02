import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import Logo from './Logo/Logo';

const Header: FunctionComponent = () => (
  <header className={styles.main}>
    <PageSize>
      <Logo />
    </PageSize>
  </header>
);

export default Header;

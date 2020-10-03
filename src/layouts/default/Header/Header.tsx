import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import { getNavigation } from 'models/navigation';
import useLocale from 'hooks/useLocale';
import Logo from './Logo/Logo';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';
import LanguageSelection from 'components/LanguageSelection/LanguageSelection';

const Header: FunctionComponent = () => (
  <header className={styles.main}>
    <PageSize className={styles.inner}>
      <Logo />

      <nav>
        <NavigationLinks links={getNavigation('header', useLocale()).links} />
        <LanguageSelection />
      </nav>
    </PageSize>
  </header>
);

export default Header;

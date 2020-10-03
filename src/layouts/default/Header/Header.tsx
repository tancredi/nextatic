import { useState, FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import classNames from 'classnames';
import styles from './Header.module.scss';
import { getNavigation } from 'models/navigation';
import useLocale from 'hooks/useLocale';
import Navigation from 'components/Navigation/Navigation';
import LanguageSwitcher from 'components/LanguageSwitcher/LanguageSwitcher';
import Hamburger from './Hamburger/Hamburger';
import Logo from './Logo/Logo';

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <header className={classNames(styles.header, { [styles.open]: isOpen })}>
      <PageSize className={styles.inner}>
        <Logo />

        <nav>
          <Navigation
            activeClassName={styles.active}
            links={getNavigation('header', useLocale()).links}
            onClick={close}
          />

          <LanguageSwitcher onClick={close} />
        </nav>

        <Hamburger
          isOpen={isOpen}
          onClick={toggle}
          className={styles.hamburger}
        />
      </PageSize>
    </header>
  );
};

export default Header;

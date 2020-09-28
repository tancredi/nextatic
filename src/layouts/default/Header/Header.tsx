import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Header.module.sass';
import Link from 'components/Link/Link';

interface Props {}

const Header: FunctionComponent<Props> = ({}) => (
  <header className={styles.main}>
    <PageSize>
      <Link href="/">
        <a className={styles.logo}>Logo</a>
      </Link>
    </PageSize>
  </header>
);

export default Header;

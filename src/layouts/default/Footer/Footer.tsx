import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Footer.module.sass';

interface Props {}

const Footer: FunctionComponent<Props> = ({}) => (
  <footer className={styles.main}>
    <PageSize>Footer</PageSize>
  </footer>
);

export default Footer;

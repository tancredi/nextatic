import { FunctionComponent, ReactNode } from 'react';
import styles from './Section.module.scss';

interface Props {
  children: ReactNode;
}

const Section: FunctionComponent<Props> = ({ children }) => (
  <section className={styles.section}>{children}</section>
);

export default Section;

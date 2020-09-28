import { FunctionComponent, ReactNode } from 'react';
import styles from './Section.module.sass';

interface Props {
  children: ReactNode;
}

const Section: FunctionComponent<Props> = ({ children }) => (
  <section className={styles.main}>{children}</section>
);

export default Section;

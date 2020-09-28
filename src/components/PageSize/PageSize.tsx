import { ReactNode, FunctionComponent } from 'react';
import styles from './PageSize.module.sass';

interface Props {
  children?: ReactNode;
}

const PageSize: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.main}>{children}</div>
);

export default PageSize;

import { ReactNode, FunctionComponent } from 'react';
import styles from './PageSize.module.scss';
import classNames from 'classnames';

interface Props {
  children?: ReactNode;
  className?: string;
}

const PageSize: FunctionComponent<Props> = ({ children, className }) => (
  <div className={classNames(styles.main, className)}>{children}</div>
);

export default PageSize;

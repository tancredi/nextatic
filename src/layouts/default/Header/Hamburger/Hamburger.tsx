import { FunctionComponent } from 'react';
import styles from './Hamburger.module.scss';
import classNames from 'classnames';

interface Props {
  isOpen?: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger: FunctionComponent<Props> = ({
  isOpen,
  onClick,
  className
}) => (
  <a
    onClick={onClick}
    className={classNames(
      styles.hamburger,
      { [styles.open]: isOpen },
      className
    )}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </a>
);

export default Hamburger;

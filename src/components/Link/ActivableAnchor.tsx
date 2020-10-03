import { AnchorHTMLAttributes, FunctionComponent } from 'react';
import omit from 'lodash/omit';
import { useRouter } from 'next/router';
import classNames from 'classnames';

export type Props = AnchorHTMLAttributes<any> & {
  activeClassName?: string;
};

const ActivableAnchor: FunctionComponent<Props> = props => {
  const router = useRouter();
  const isActive = router.asPath === props.href;
  const anchorProps = omit(props, 'activeClassName');
  const className = classNames(
    props.className,
    isActive && props.activeClassName
  );

  return (
    <a
      {...anchorProps}
      className={className}
      href={isActive ? undefined : props.href}
    />
  );
};

export default ActivableAnchor;

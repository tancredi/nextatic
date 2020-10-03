import { FunctionComponent } from 'react';
import { UserLink } from 'models/navigation';
import NavigationLink from 'components/Link/NavigationLink';

interface Props {
  links: UserLink[];
  onClick?: () => void;
  className?: string;
  linkClassName?: string;
  activeClassName?: string;
}

const Navigation: FunctionComponent<Props> = ({
  links,
  onClick,
  linkClassName,
  activeClassName
}) => (
  <>
    {links.map((link, i: number) => (
      <NavigationLink
        key={i}
        link={link}
        className={linkClassName}
        onClick={onClick}
        activeClassName={activeClassName}
      />
    ))}
  </>
);

export default Navigation;

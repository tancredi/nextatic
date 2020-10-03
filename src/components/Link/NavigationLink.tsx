import { FunctionComponent } from 'react';
import { UserLink } from 'models/navigation';
import ActivableAnchor from 'components/Link/ActivableAnchor';
import PageLink from 'components/Link/PageLink';

interface Props {
  link: UserLink;
  onClick?: () => void;
  className?: string;
  activeClassName?: string;
}

const NavigationLink: FunctionComponent<Props> = ({
  link,
  onClick,
  className,
  activeClassName
}) => {
  const { label, page, href } = link;

  if (page) {
    return (
      <PageLink slug={page} passHref>
        <ActivableAnchor
          onClick={onClick}
          className={className}
          activeClassName={activeClassName}
        >
          {label}
        </ActivableAnchor>
      </PageLink>
    );
  }

  return (
    <a href={href} target="_blank" onClick={onClick} className={className}>
      {label}
    </a>
  );
};

export default NavigationLink;

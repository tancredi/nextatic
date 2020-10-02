import { FunctionComponent } from 'react';
import { NavigationLink } from 'models/navigation';
import Link from 'components/Link/Link';

interface Props {
  links: NavigationLink[];
  className?: string;
}

const NavigationLinks: FunctionComponent<Props> = ({ links, className }) => (
  <nav className={className}>
    {links.map(({ label, page, href }, i) => {
      if (page) {
        <Link href="/[slug]" as={`/${page}`} key={i}>
          <a>{label}</a>
        </Link>;
      }

      return (
        <a href={href} target="_blank">
          {label}
        </a>
      );
    })}
  </nav>
);

export default NavigationLinks;

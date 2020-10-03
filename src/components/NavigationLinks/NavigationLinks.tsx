import { FunctionComponent } from 'react';
import { NavigationLink } from 'models/navigation';
import Link from 'components/Link/Link';

interface Props {
  links: NavigationLink[];
  onClick?: () => void;
}

const NavigationLinks: FunctionComponent<Props> = ({ links, onClick }) => (
  <>
    {links.map(({ label, page, href }, i) => {
      if (page) {
        return (
          <Link href="/[slug]" as={`/${page}`} key={i}>
            <a onClick={onClick}>{label}</a>
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" key={i} onClick={onClick}>
          {label}
        </a>
      );
    })}
  </>
);

export default NavigationLinks;

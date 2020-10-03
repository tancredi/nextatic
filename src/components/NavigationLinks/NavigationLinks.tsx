import { FunctionComponent } from 'react';
import { NavigationLink } from 'models/navigation';
import Link from 'components/Link/Link';

interface Props {
  links: NavigationLink[];
}

const NavigationLinks: FunctionComponent<Props> = ({ links }) => (
  <>
    {links.map(({ label, page, href }, i) => {
      if (page) {
        return (
          <Link href="/[slug]" as={`/${page}`} key={i}>
            <a>{label}</a>
          </Link>
        );
      }

      return (
        <a href={href} target="_blank" key={i}>
          {label}
        </a>
      );
    })}
  </>
);

export default NavigationLinks;

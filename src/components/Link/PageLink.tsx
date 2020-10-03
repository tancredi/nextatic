import { FunctionComponent } from 'react';
import LocalisedLink, { Props as LinkProps } from './LocalisedLink';

type Props = Omit<LinkProps, 'href' | 'as'> & { slug: string };

const PageLink: FunctionComponent<Props> = props => (
  <LocalisedLink {...props} href="/[slug]" as={`/${props.slug}`} />
);

export default PageLink;

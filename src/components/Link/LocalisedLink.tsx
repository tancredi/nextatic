import { FunctionComponent } from 'react';
import Link, { Props as LinkProps } from './Link';
import { Locale } from 'types/app';
import useLocale from 'hooks/useLocale';

export type Props = LinkProps & {
  locale?: Locale;
  activeClassName?: string;
};

const LocalisedLink: FunctionComponent<Props> = props => {
  const currentLocale = useLocale();
  const locale = props.locale || currentLocale;
  const as = `/${locale}${props.as || props.href}`;
  const href = `/[locale]${props.href}`;

  return <Link {...props} as={as} href={href} />;
};

export default LocalisedLink;

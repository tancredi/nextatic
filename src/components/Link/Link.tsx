import { FunctionComponent } from 'react';
import NextLink, { LinkProps } from 'next/link';
import { Locale } from 'types/app';
import useLocale from 'hooks/useLocale';

export type Props = LinkProps & {
  localised?: boolean;
  locale?: Locale;
};

const Link: FunctionComponent<Props> = props => {
  const { href, as, localised = true } = props;
  const currentLocale = useLocale();
  const locale = props.locale || currentLocale;
  const overrides: Partial<Props> = {};

  if (localised) {
    overrides.href = `/[locale]${href}`;
    overrides.as = `/${locale}${as || href}`;
  }

  return <NextLink {...props} {...overrides} />;
};

export default Link;

import { FunctionComponent } from 'react';
import NextLink, { LinkProps } from 'next/link';
import useLocale from 'hooks/useLocale';

type Props = LinkProps & {
  localised?: boolean;
};

const Link: FunctionComponent<Props> = props => {
  const { href, as, localised = true } = props;
  const locale = useLocale();
  const overrides: Partial<Props> = {};

  if (localised) {
    overrides.href = `/[locale]${href}`;
    overrides.as = `/${locale}${as || href}`;
  }

  console.log(overrides);

  return <NextLink {...props} {...overrides} />;
};

export default Link;

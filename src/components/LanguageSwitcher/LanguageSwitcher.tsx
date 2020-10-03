import { FunctionComponent } from 'react';
import { LOCALES } from 'core/config';
import useLocale from 'hooks/useLocale';
import { Locale } from 'types/app';
import Link from 'components/Link/Link';
import { getLanguageInfo } from 'utils/language';
import { useRouter } from 'next/router';

interface Props {
  onClick?: () => void;
}

const LanguageSwitcher: FunctionComponent<Props> = ({ onClick }) => {
  const currentLocale = useLocale();
  const otherLocales = LOCALES.filter((val: Locale) => val !== currentLocale);
  const router = useRouter();
  const { pathname, asPath } = router;

  return (
    <>
      {otherLocales.map((locale: Locale) => {
        const info = getLanguageInfo(locale);
        const displayName = (info && info.nativeName.split(',')[0]) || locale;
        const localisedAs = asPath.replace(`/${currentLocale}`, `/${locale}`);

        return (
          <Link href={pathname} as={localisedAs} key={locale}>
            <a onClick={onClick}>{displayName}</a>
          </Link>
        );
      })}
    </>
  );
};

export default LanguageSwitcher;

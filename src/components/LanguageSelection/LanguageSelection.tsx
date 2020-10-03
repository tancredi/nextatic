import { FunctionComponent } from 'react';
import { LOCALES } from 'core/config';
import useLocale from 'hooks/useLocale';
import { Locale } from 'types/app';
import Link from 'components/Link/Link';
import { getLanguageInfo } from 'utils/language';

const LanguageSelection: FunctionComponent = () => {
  const currentLocale = useLocale();
  const otherLocales = LOCALES.filter((val: Locale) => val !== currentLocale);

  return (
    <>
      {otherLocales.map((locale: Locale) => {
        const info = getLanguageInfo(locale);

        return (
          <Link href="/" locale={locale} key={locale}>
            <a>{info ? info.nativeName : locale}</a>
          </Link>
        );
      })}
    </>
  );
};

export default LanguageSelection;

import { FunctionComponent } from 'react';
import { AppProps } from 'next/app';
import { Locale } from 'types/app';
import pageContext from 'core/page-context';
import { DEFAULT_LOCALE } from 'config/constants';
import 'styles/main.sass';

const MyApp: FunctionComponent<AppProps> = ({
  Component,
  pageProps,
  router
}) => {
  const locale: Locale = (router.query.locale as Locale) || DEFAULT_LOCALE;

  return (
    <pageContext.Provider value={{ locale }}>
      <Component {...pageProps} />
    </pageContext.Provider>
  );
};

export default MyApp;

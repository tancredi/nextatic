import { createContext } from 'react';
import { Locale } from 'types/app';

export interface ViewPriceContext {
  locale: Locale;
}

const pageContext = createContext({} as ViewPriceContext);

export default pageContext;

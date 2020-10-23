import { createContext } from 'react';
import { Locale } from 'types/app';

export interface PageContext {
  locale: Locale;
}

const pageContext = createContext({} as PageContext);

export default pageContext;

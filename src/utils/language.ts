import languages from 'data/languages.yml';
import { Locale } from 'types/app';

interface LanguageInfo {
  name: string;
  nativeName: string;
}

export const getLanguageInfo = (locale: Locale): LanguageInfo | null =>
  (languages as any)[locale] || null;

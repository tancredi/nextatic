import { DEFAULT_LOCALE } from 'core/config';
import { getContent } from 'utils/content';
import { Locale } from 'types/app';

export type NavigationLink = {
  label: string;
  page?: string;
  href?: string;
};

export const getHeaderNavigation = (locale: Locale = DEFAULT_LOCALE) =>
  getContent<NavigationLink[]>('settings', 'navigation', locale, 'yml');

import { DEFAULT_LOCALE } from 'core/config';
import { getContent } from 'utils/content';
import { Locale } from 'types/app';

export type UserLink = {
  label: string;
  page?: string;
  href?: string;
};

export interface Navigation {
  links: UserLink[];
}

export const getNavigation = (name: string, locale: Locale = DEFAULT_LOCALE) =>
  getContent<Navigation>('navigation', name, locale, 'yml');

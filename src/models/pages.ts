import { DEFAULT_LOCALE } from 'core/config';
import { getContent } from 'utils/content';
import { MarkdownContent } from 'types/app';
import { Locale } from 'types/app';

export type Page = MarkdownContent<{
  name: string;
  title: string;
  created: string;
}>;

export const getPage = (slug: string, locale: Locale = DEFAULT_LOCALE) =>
  getContent<Page>('pages', slug, locale, 'md');

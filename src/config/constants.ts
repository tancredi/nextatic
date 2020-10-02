import { Locale } from 'types/app';
import get from 'lodash/get';

const cmsConfig = require('public/admin/config.yml') as any;

export const DEFAULT_PAGE_SLUG = 'home';

export const DEFAULT_LOCALE: Locale = get(
  cmsConfig,
  'i18n.default_locale' || 'en'
);

export const LOCALES = get(cmsConfig, 'i18n.locales' || ['en']);

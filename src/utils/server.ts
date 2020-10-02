import { readdirSync } from 'fs';
import { DEFAULT_LOCALE } from 'core/config';
import { extname, basename } from 'path';

export const getContentList = (collection: string, localised = false) =>
  readdirSync(`content/${collection}` + (localised ? `/${DEFAULT_LOCALE}` : ''))
    .filter(fname => extname(fname) === '.md')
    .map(fname => basename(fname, extname(fname)));

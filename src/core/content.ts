import { Locale, Content } from 'types/app';

export const getContent = <AttributesT = any>(
  collection: string,
  slug: string,
  locale?: Locale
): Content<AttributesT> =>
  locale
    ? require(`@content/${collection}/${locale}/${slug}.md`)
    : require(`@content/${collection}/${slug}.md`);

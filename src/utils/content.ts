import { DEFAULT_LOCALE } from 'config/constants';
import { Locale, Content } from 'types/app';

const BASE_LOCALE = DEFAULT_LOCALE;

const merge = (a: any, b: any) => {
  if ('attributes' in a) {
    return {
      attributes: { ...a.attributes, ...b.attributes },
      react: b.react || a.react
    };
  }

  return { ...a, ...b };
};

export const getContent = <AttributesT = any>(
  collection: string,
  slug: string,
  locale?: Locale | null,
  extension = 'md'
): Content<AttributesT> => {
  if (locale) {
    return merge(
      require(`content/${collection}/${BASE_LOCALE}/${slug}.${extension}`),
      require(`content/${collection}/${locale}/${slug}.${extension}`)
    );
  }

  return require(`content/${collection}/${slug}.${extension}`);
};

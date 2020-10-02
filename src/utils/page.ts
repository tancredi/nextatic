import { GetStaticPaths } from 'next';
import { LOCALES } from 'core/config';

export const localisedStaticPathsGetter = (
  getParamSets: Object[] | (() => Promise<Object[]>),
  fallback = false
): GetStaticPaths => async () => {
  const paths = [];
  const paramSets =
    typeof getParamSets === 'function' ? await getParamSets() : getParamSets;

  for (const params of paramSets) {
    for (const locale of LOCALES) {
      paths.push({ params: { ...params, locale } });
    }
  }

  return { fallback, paths };
};

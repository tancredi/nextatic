import { GetStaticPaths } from 'next';
import { LOCALES } from 'config/constants';

export const localisedStaticPathsGetter = (
  paramSets: Object[],
  fallback = false
): GetStaticPaths => async () => {
  const paths = [];

  for (const params of paramSets) {
    for (const locale of LOCALES) {
      paths.push({ params: { ...params, locale } });
    }
  }

  return { fallback, paths };
};

import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import { getContent } from 'utils/content';
import { Locale } from 'types/app';
import { DEFAULT_PAGE_SLUG } from 'config/constants';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import DefaultLayout from 'layouts/default';
import { localisedStaticPathsGetter } from 'utils/page';

interface Props {
  locale: Locale;
  slug: string;
}

const Page: NextPage<Props> = ({ slug, locale }) => {
  const entry = getContent('pages', slug, locale);
  const { attributes, react: HomeContent } = entry;
  const { title } = attributes;

  return (
    <DefaultLayout>
      <Section>
        <PageSize>
          <h1>{title}</h1>

          <HomeContent />
        </PageSize>
      </Section>
    </DefaultLayout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params: { locale, slug }
}) => ({
  props: {
    locale: locale as Locale,
    slug: (slug as string) || DEFAULT_PAGE_SLUG
  }
});

export default Page;

export const getStaticPaths = localisedStaticPathsGetter([
  { slug: DEFAULT_PAGE_SLUG }
]);

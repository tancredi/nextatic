import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Locale } from 'types/app';
import { DEFAULT_PAGE_SLUG, DEFAULT_LOCALE } from 'core/config';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import DefaultLayout from 'layouts/default';
import { localisedStaticPathsGetter } from 'utils/page';
import { getGeneralSettings } from 'models/settings';
import { getPage } from 'models/pages';

interface Props {
  locale: Locale;
  slug: string;
}

const Page: NextPage<Props> = ({ slug, locale }) => {
  const entry = getPage(slug, locale);
  const { attributes, react: HomeContent } = entry;
  const { basePageTitle } = getGeneralSettings();
  const { title } = attributes;

  return (
    <>
      <Head>
        <title>
          {title} | {basePageTitle}
        </title>
      </Head>

      <DefaultLayout>
        <Section>
          <PageSize>
            <h1>{title}</h1>
            <HomeContent />
          </PageSize>
        </Section>
      </DefaultLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async ({
  params: { locale, slug } = {}
}) => ({
  props: {
    locale: (locale as Locale) || DEFAULT_LOCALE,
    slug: (slug as string) || DEFAULT_PAGE_SLUG
  }
});

export default Page;

export const getStaticPaths = localisedStaticPathsGetter(() =>
  require('utils/server/')
    .getContentList('pages', true)
    .map((slug: string) => ({ slug }))
);

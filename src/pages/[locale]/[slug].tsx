import React, { useEffect } from 'react';
import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { Locale } from 'types/app';
import { DEFAULT_PAGE_SLUG, DEFAULT_LOCALE } from 'core/config';
import DefaultLayout from 'layouts/default';
import { localisedStaticPathsGetter } from 'utils/page';
import { getGeneralSettings } from 'models/settings';
import { getPage } from 'models/pages';
import pageComponents from 'page-components/index';
import { useRouter } from 'next/router';

interface Props {
  locale: Locale;
  slug: string;
}

const Page: NextPage<Props> = ({ slug, locale }) => {
  const page = getPage(slug, locale);
  const { attributes } = page;
  const { basePageTitle } = getGeneralSettings();
  const { title } = attributes;
  const PageComponent = pageComponents[slug] || pageComponents.default;
  const router = useRouter();
  
   useEffect(() => {
    if (router.pathname === '/') {
      router.push(`${locale}`);
    }
  }, []);

  
  return (
    <>
      <Head>
        <title>
          {title} | {basePageTitle}
        </title>
      </Head>

      <DefaultLayout>
        <PageComponent page={page} />
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

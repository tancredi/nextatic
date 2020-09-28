import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { getContent } from 'utils/content';
import { Locale } from 'types/app';
import { DEFAULT_PAGE_SLUG } from 'config/constants';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import DefaultLayout from 'layouts/default';

interface Props {
  locale: Locale;
  slug: string;
}

const Page: NextPage<Props> = ({ slug = DEFAULT_PAGE_SLUG, locale }) => {
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

Page.getInitialProps = ({ query }: NextPageContext) => ({
  locale: query.locale as Locale,
  slug: query.slug as string
});

export default Page;

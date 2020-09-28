import React from 'react';
import { NextPage, NextPageContext } from 'next';
import { getContent } from 'core/content';
import { Locale } from 'types/app';
import { DEFAULT_PAGE_SLUG } from 'core/constants';

interface Props {
  locale: Locale;
  slug: string;
}

const Page: NextPage<Props> = ({ slug = DEFAULT_PAGE_SLUG, locale }) => {
  const entry = getContent('pages', slug, locale);
  const { attributes, react: HomeContent } = entry;
  const { title } = attributes;

  return (
    <>
      <article>
        <h1>{title}</h1>

        <HomeContent />
      </article>
    </>
  );
};

Page.getInitialProps = ({ query }: NextPageContext) => ({
  locale: query.locale as Locale,
  slug: query.slug as string
});

export default Page;

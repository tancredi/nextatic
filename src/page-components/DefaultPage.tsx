import { FunctionComponent } from 'react';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import { PageComponentProps } from './page-components.types';

const DefaultPage: FunctionComponent<PageComponentProps> = ({
  page: {
    attributes: { title },
    react: Content
  }
}) => (
  <Section>
    <PageSize>
      <h1>{title}</h1>

      <Content />
    </PageSize>
  </Section>
);

export default DefaultPage;

import { FunctionComponent } from 'react';
import Section from 'components/Section/Section';
import PageSize from 'components/PageSize/PageSize';
import { PageComponentProps } from './page-components.types';

const ContactsPage: FunctionComponent<PageComponentProps> = ({
  page: {
    attributes: { title },
    react: Content
  }
}) => (
  <>
    <Section>
      <PageSize>
        <h1>{title}</h1>

        <Content />
      </PageSize>
    </Section>

    <Section alternate>
      <PageSize>
        <p>Example of a page rendered with a custom component.</p>

        <p>
          You can find this component in{' '}
          <code>src/components/page-components/ContactsPage.tsx</code>.
        </p>

        <p>
          In order to associate it to a <code>Page</code> entry from the CMS,
          edit the components map in{' '}
          <code>src/components/page-components/index.ts</code>.
        </p>
      </PageSize>
    </Section>
  </>
);

export default ContactsPage;

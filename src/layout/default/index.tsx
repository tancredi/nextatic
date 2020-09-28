import { FunctionComponent, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children?: ReactNode;
}

const DefaultLayout: FunctionComponent<Props> = ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
  </>
);

export default DefaultLayout;

import { FunctionComponent, ReactNode } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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

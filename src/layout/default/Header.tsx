import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize';

interface Props {}

const Header: FunctionComponent<Props> = ({}) => (
  <header>
    <PageSize>Header</PageSize>
  </header>
);

export default Header;

import { ReactNode, FunctionComponent } from 'react';

interface Props {
  children?: ReactNode;
}

const PageSize: FunctionComponent<Props> = ({}) => (
  <div className="page-size"></div>
);

export default PageSize;

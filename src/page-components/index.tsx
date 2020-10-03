import { PageComponentsMap } from './page-components.types';
import DefaultPage from './DefaultPage';
import ContactsPage from './ContactsPage';

const PAGE_COMPONENTS_MAP: PageComponentsMap = {
  default: DefaultPage,
  contacts: ContactsPage
};

export default PAGE_COMPONENTS_MAP;

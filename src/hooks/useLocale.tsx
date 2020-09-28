import { useContext } from 'react';
import pageContext from 'core/page-context';

const useLocale = () => useContext(pageContext).locale;

export default useLocale;

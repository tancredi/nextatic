import { FunctionComponent } from 'react';
import PageSize from 'components/PageSize/PageSize';
import styles from './Footer.module.sass';
import { getNavigation } from 'models/navigation';
import { getGeneralSettings } from 'models/settings';
import NavigationLinks from 'components/NavigationLinks/NavigationLinks';

interface Props {}

const Footer: FunctionComponent<Props> = ({}) => {
  const { brandName } = getGeneralSettings();
  const { links } = getNavigation('footer');
  const copyright = `© ${brandName} ${new Date().getFullYear()}`;

  return (
    <footer className={styles.main}>
      <PageSize className={styles.inner}>
        <div className={styles.copy}>{copyright}</div>

        <nav>
          <NavigationLinks links={links} />
        </nav>
      </PageSize>
    </footer>
  );
};

export default Footer;

import Page, { getStaticProps } from './[slug]';
import { localisedStaticPathsGetter } from 'utils/page';

export default Page;

export { getStaticProps };

export const getStaticPaths = localisedStaticPathsGetter([{}]);

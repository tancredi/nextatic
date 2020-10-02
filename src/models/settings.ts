import { getContent } from 'utils/content';

export interface GeneralSettings {
  brandName: string;
  logo?: string;
  basePageTitle: string;
}

export const getGeneralSettings = () =>
  getContent('settings', 'general', null, 'yml') as GeneralSettings;

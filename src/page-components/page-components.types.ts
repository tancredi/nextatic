import { ComponentType } from 'react';
import { Page } from 'models/pages';

export interface PageComponentProps {
  page: Page;
}

export type PageComponent = ComponentType<PageComponentProps>;

export interface PageComponentsMap {
  default: PageComponent;
  [key: string]: PageComponent;
}

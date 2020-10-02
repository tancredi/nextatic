import { ComponentType } from 'react';

export type Locale = string;

export type Content<T = any> = { react: ComponentType; attributes: T } | T;

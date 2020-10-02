import { ComponentType } from 'react';

export type Locale = string;

export type MarkdownContent<T = any> = { react: ComponentType; attributes: T };

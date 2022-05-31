import { ReactNode } from 'react';

export interface Params {
  color?: string;
  styles?: string;
  mt?: number | string;
  ml?: number | string;
  children: ReactNode;
}

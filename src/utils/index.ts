import { IsNumberFn, SuffixFn } from './types';

export const isNumber: IsNumberFn = value => !Array.isArray(value) && !Number.isNaN(parseInt(value + '', 10));
export const suffix: SuffixFn = value => (isNumber(value) ? `-${value}` : '');

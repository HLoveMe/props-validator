/* eslint-disable  */
import { dateValidatorCheckString, dateValidatorCheck } from './DateValidator';
import * as TypedArray from './TypedArray';
import * as Null from './Nullly';
import * as PromiseProps from './Promise';

export default {
  dateString: dateValidatorCheckString(/(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/),
  date: dateValidatorCheck,
  ...(TypedArray as any).default,
  ...(Null as any).default,
  ...(PromiseProps as any).default,
} as any;
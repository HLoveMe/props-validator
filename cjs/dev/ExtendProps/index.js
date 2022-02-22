/* eslint-disable  */
import { dateValidatorCheckString, dateValidatorCheck } from './DateValidator';
import TypedArray from './TypedArray';
import Null from './Nullly';
import PromiseProps from './Promise';
export default {
    dateString: dateValidatorCheckString(/(\d){4}?-(\d){2}?-(\d){2}? (\d){2}?:(\d){2}?:(\d){2}?/),
    date: dateValidatorCheck,
    ...TypedArray,
    ...Null,
    ...PromiseProps,
};

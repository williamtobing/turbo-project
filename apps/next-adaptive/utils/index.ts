import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import dayjs, { Dayjs } from 'dayjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const DateFormat = (
  date: string | number | Date | Dayjs | undefined = undefined
) => ({
  toDefaultHTML: () => dayjs(date).format('YYYY-MM-DD'),

  // ? Date Region
  toDate: () => dayjs(date).format('DD MMMM YYYY'),
  toDateTime: () => dayjs(date).format('DD MMMM YYYY - HH:mm'),
  toDayDateTime: () => dayjs(date).format('dddd, DD MMMM YYYY - HH:mm'),
  toDayDate: () => dayjs(date).format('dddd, DD MMMM YYYY'),

  toDateShortMonth: () => dayjs(date).format('DD MMM YYYY'),
  toDateTimeShortMonth: () => dayjs(date).format('DD MMM YYYY - HH:mm'),
  toDayDateTimeShortMonth: () =>
    dayjs(date).format('dddd, DD MMM YYYY - HH:mm'),
  toDayDateShortMonth: () => dayjs(date).format('dddd, DD MMM YYYY'),

  toDashDate: () => dayjs(date).format('DD-MM-YYYY'),

  // ? Month Region
  toMonth: () => dayjs(date).format('MMMM YYYY'),
  toShortMonth: () => dayjs(date).format('MMM YYYY'),
});

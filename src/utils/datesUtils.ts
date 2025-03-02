import { format, isValid } from 'date-fns';

export const formatValue = (value: string): string => {
  if (!value) return '';

  const date = new Date(value);

  return isValid(date) ? format(date, 'dd/MM/yy') : value;
};

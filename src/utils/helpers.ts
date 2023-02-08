/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMediaQuery } from '@mui/material';
import { theme } from '@/styles/theme';
import { TitleCase, Route } from '@/types';

const nonHeaderRoutes = [Route.TUITION_CALCULATOR];

export const showHeader = (route: Route) => !nonHeaderRoutes.includes(route);

export const StringIsNumber = (value: any) => isNaN(Number(value)) === false;

/**
 * Converts enum to array key values
 *
 * @param iterible - Enum to convert
 * @returns Array of iterible values
 */
export const EnumKeysToArray = (iterible: any): string[] => Object.keys(iterible)
  .filter(StringIsNumber)
  .map((key) => iterible[key]);

/**
 * Returns a title-cased version of its parameter - useful for mapping enum values
 * to title-case ex. all result in "Test Case" and provide return type as "Test Case"
 * toTitleCase("test case"); toTitleCase("TEST_CASE"); toTitleCase("Test case")
 *
 * @param s string to be title-cased
 * @returns title-cased version of s
 */
export function toTitleCase<T extends string>(s: T): TitleCase<T> {
  return <TitleCase<T>>s.toLowerCase().split('_').map((st) => st.slice(0, 1).toUpperCase() + st.slice(1)).join(' ');
}

/**
 * Formats a given name, last name, middle name, and suffix into a full name
 *
 * @param first Given name
 * @param last Family name
 * @param middle - Middle name or initial
 * @param suffix
 * @returns Full name | undefined
 */
export function formatFullName(
  first?: string | null,
  last?: string | null,
  middle? : string | null,
  suffix?: string | null,
) {
  return `${first ? toTitleCase(first.trim()) : ''}${middle ? ` ${toTitleCase(middle.trim())}.` : ''} ${last ? toTitleCase(last.trim()) : ''}${suffix ? ` ${toTitleCase(suffix.trim())}` : ''}`.trim();
}

/**
 * Returns a human readable phone number.  Only handles 10, 11 digit numbers
 * @param {number} phone
 * @returns {string} 1-800-555-5555
 */
export function formatPhoneNumber(phone?: string) {
  if (!phone) {
    return '';
  }

  if (phone.length === 11) {
    return [
      phone.slice(0, 1),
      phone.slice(1, 4),
      phone.slice(4, 7),
      phone.slice(7),
    ].join('-');
  } if (phone.length === 10) {
    return [phone.slice(0, 3), phone.slice(3, 6), phone.slice(6)].join('-');
  }

  // fallback: we handle structured this to handle lengths other than
  // 10 & 11 digits.
  return phone;
}

export function ensurePrefix(str: string, prefix: string) {
  return str.startsWith(prefix) ? str : `${prefix}${str}`;
}

export function formatDate(str: string) {
  return new Date(str).toLocaleDateString();
}

export function formatCurrency(str: number) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return str.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

export function isMobile() {
  return useMediaQuery(theme.breakpoints.down('sm'));
}

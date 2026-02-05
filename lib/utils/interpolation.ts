import type { Template } from '@/config/templates';
import type { UserProfile } from '@/lib/hooks/useProfile';
import { formatDate, toDate } from './date';

/**
 * Formats a value for template interpolation
 * Handles dates, date ranges, and converts to string
 * @param value - The value to format
 * @param t - Translation function
 * @returns The formatted value
 */
export function formatInterpolationValue(value: any, t: (key: string) => string): string {
  if (value === null || value === undefined || value === '') {
    return '';
  }

  // Handle date range (array of 2 dates)
  if (Array.isArray(value) && value.length >= 2) {
    const [start, end] = value;
    const startDate = toDate(start);
    const endDate = toDate(end);
    if (startDate && endDate) {
      const separator = t('Dates.to');
      return `${formatDate(startDate)} ${separator} ${formatDate(endDate)}`;
    }
  }

  // Handle single date
  const singleDate = toDate(value);
  if (singleDate && typeof value !== 'string') {
    return formatDate(singleDate);
  }

  return String(value);
}

const PROFILE_TRANSLATION_KEYS: Record<keyof UserProfile, string> = {
  fullName: 'Profile.full_name',
  jobTitle: 'Profile.job_title',
  companyName: 'Profile.company_name',
  signature: 'Profile.signature',
};

/**
 * Builds interpolation data object for template rendering
 * @param template - The template to interpolate
 * @param formValues - The form values to interpolate
 * @param userProfile - The user profile to interpolate
 * @param t - Root translation function (useTranslations() with no namespace)
 * @returns The interpolation data object
 */
export function buildInterpolationData(
  template: Template,
  formValues: Record<string, any>,
  userProfile: UserProfile,
  t: (key: string) => string
): Record<string, string> {
  const data: Record<string, string> = {};

  // Add profile fields with translated placeholders when empty
  (Object.keys(PROFILE_TRANSLATION_KEYS) as (keyof UserProfile)[]).forEach((key) => {
    const value = userProfile[key];
    if (value) {
      data[key] = value;
    } else if (key !== 'signature') {
      data[key] = `[${t(PROFILE_TRANSLATION_KEYS[key])}]`;
    } else {
      data[key] = '';
    }
  });

  // Pre-populate template input keys with translated placeholders
  template.inputs.forEach((input) => {
    data[input.key] = `[${t(`Templates.${template.id}.fields.${input.labelKey}`)}]`;
  });

  // Add formatted form values (overrides placeholders)
  Object.entries(formValues).forEach(([key, value]) => {
    const formatted = formatInterpolationValue(value, t);
    if (formatted) {
      data[key] = formatted;
    }
  });

  return data;
}

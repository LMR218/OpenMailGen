// Locale configuration type
export interface LocaleConfig {
  value: string;
  label: string;
}

// Localization configuration - add new languages here
export const locales: LocaleConfig[] = [
  { value: 'en', label: 'English' },
  { value: 'ar', label: 'العربية' },
];

// Derived type for locale string values
export type Locale = (typeof locales)[number]['value'];

// Helper to get all locale values as strings
export const localeValues = locales.map((l) => l.value);

export const defaultLocale = 'en' satisfies Locale;

// RTL locales (just the values)
export const rtlLocales: Locale[] = ['ar'];

export function isRtlLocale(locale: string): boolean {
  return rtlLocales.includes(locale as Locale);
}

// Helper to get locale config by value
export function getLocaleConfig(value: string): LocaleConfig | undefined {
  return locales.find((l) => l.value === value);
}

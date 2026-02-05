import createMiddleware from 'next-intl/middleware';
import { defaultLocale, localeValues } from '@/i18n/config';

export default createMiddleware({
  locales: localeValues,
  defaultLocale,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};

import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, localeValues, type Locale } from './config';
import arPages from './messages/ar/ar.json';
import arGeneral from './messages/ar/general.json';
import arHrRequests from './messages/ar/hr_requests.json';
import arMeetings from './messages/ar/meetings.json';
// Import template category translations - AR
import arTimeOff from './messages/ar/time_off.json';
// Import page translations
import enPages from './messages/en/en.json';
import enGeneral from './messages/en/general.json';
import enHrRequests from './messages/en/hr_requests.json';
import enMeetings from './messages/en/meetings.json';
// Import template category translations - EN
import enTimeOff from './messages/en/time_off.json';

// Merge all messages per locale
const messages: Record<Locale, any> = {
  en: {
    ...enPages,
    Templates: {
      ...enTimeOff,
      ...enHrRequests,
      ...enMeetings,
      ...enGeneral,
    },
  },
  ar: {
    ...arPages,
    Templates: {
      ...arTimeOff,
      ...arHrRequests,
      ...arMeetings,
      ...arGeneral,
    },
  },
};

export default getRequestConfig(async () => {
  // Get locale from cookie, fallback to default
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value;

  // Validate locale - check if cookie value is in our locale values
  const locale: Locale = localeValues.includes(localeCookie as Locale)
    ? (localeCookie as Locale)
    : defaultLocale;

  return {
    locale,
    messages: messages[locale],
  };
});

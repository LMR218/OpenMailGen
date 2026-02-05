import { cookies } from 'next/headers';
import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, localeValues, type Locale } from './config';
import arPages from './messages/ar/ar.json';
import arGeneral from './messages/ar/general.json';
import arHrRequests from './messages/ar/hr_requests.json';
import arMeetings from './messages/ar/meetings.json';
import arTimeOff from './messages/ar/time_off.json';
import enPages from './messages/en/en.json';
import enGeneral from './messages/en/general.json';
import enHrRequests from './messages/en/hr_requests.json';
import enMeetings from './messages/en/meetings.json';
import enTimeOff from './messages/en/time_off.json';

// Merge messages
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

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale) {
    const cookieStore = await cookies();
    locale = cookieStore.get('NEXT_LOCALE')?.value;
  }

  const validLocale: Locale = localeValues.includes(locale as Locale)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: validLocale,
    messages: messages[validLocale],
  };
});

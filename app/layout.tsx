import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import {
  ColorSchemeScript,
  DirectionProvider,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import AppShellLayout from '@/components/Layout/Appshell';
import { isRtlLocale, type Locale } from '@/i18n/config';
import { theme } from '../theme';

export const metadata = {
  title: 'OpenMailGen',
  description: 'OpenMailGen - Generate professional emails with ease',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = (await getLocale()) as Locale;
  const messages = await getMessages();
  const dir = isRtlLocale(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <DirectionProvider>
            <MantineProvider theme={theme}>
              <AppShellLayout>{children}</AppShellLayout>
            </MantineProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

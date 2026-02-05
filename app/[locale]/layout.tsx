import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import {
  ColorSchemeScript,
  DirectionProvider,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import AppShellLayout from '@/components/Layout/Appshell';
import { defaultLocale, isRtlLocale, localeValues, type Locale } from '@/i18n/config';
import { theme } from '../../theme';

export function generateStaticParams() {
  return localeValues.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: paramLocale } = await params;

  const locale = localeValues.includes(paramLocale as Locale)
    ? (paramLocale as Locale)
    : defaultLocale;
  setRequestLocale(locale);

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
        <NextIntlClientProvider locale={locale} messages={messages}>
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

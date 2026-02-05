'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Select } from '@mantine/core';
import { setCookie } from '@/api/cookie';
import { defaultLocale, locales } from '@/i18n/config';

export default function LanguageSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = async (value: string | null) => {
    if (value && value !== currentLocale) {
      await setCookie('NEXT_LOCALE', value);

      // Build new path with the selected locale
      let pathWithoutLocale = pathname;

      for (const loc of locales) {
        if (pathname.startsWith(`/${loc.value}/`) || pathname === `/${loc.value}`) {
          pathWithoutLocale = pathname.replace(`/${loc.value}`, '') || '/';
          break;
        }
      }

      const newPath = value === defaultLocale ? pathWithoutLocale : `/${value}${pathWithoutLocale}`;

      router.push(newPath);
    }
  };

  return (
    <Select
      size="sm"
      w={{ base: '100%', sm: 120 }}
      data={locales}
      value={currentLocale}
      onChange={handleChange}
      allowDeselect={false}
      searchable
    />
  );
}

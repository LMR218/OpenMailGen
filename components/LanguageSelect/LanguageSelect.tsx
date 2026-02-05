'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { Select } from '@mantine/core';
import { setCookie } from '@/api/cookie';
import { locales } from '@/i18n/config';

export default function LanguageSelect() {
  const router = useRouter();
  const currentLocale = useLocale();

  const handleChange = async (value: string | null) => {
    if (value && value !== currentLocale) {
      await setCookie('NEXT_LOCALE', value);
      router.refresh(); // Refresh to apply new locale
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

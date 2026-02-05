import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { Button, Flex, Text, Title } from '@mantine/core';

export default async function NotFound() {
  const t = await getTranslations('Common.not_found');
  const locale = await getLocale();

  return (
    <Flex
      h="calc(100vh - var(--app-shell-header-height) - var(--app-shell-footer-height) - var(--app-shell-footer-offset))"
      direction="column"
      justify="center"
      align="center"
    >
      <Title order={1} fz="12rem">
        404
      </Title>
      <Text fz="2rem">{t('title')}</Text>
      <Link href={`/${locale}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button m="2rem">{t('home')}</Button>
      </Link>
    </Flex>
  );
}

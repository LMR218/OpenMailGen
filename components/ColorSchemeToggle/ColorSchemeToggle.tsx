'use client';

import { IconMoon, IconSun } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Button, Tooltip, useMantineColorScheme } from '@mantine/core';
import { useStateContext } from '../Layout/stateContext';

export function ColorSchemeToggle({ withText = false }: { withText?: boolean }) {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();
  const { isMobileView } = useStateContext();
  const t = useTranslations('Common');

  return withText ? (
    <Button
      variant="default"
      aria-label="Toggle color scheme"
      onClick={() => toggleColorScheme()}
      leftSection={colorScheme === 'light' ? <IconSun /> : <IconMoon />}
      fullWidth={isMobileView}
      justify="start"
    >
      {colorScheme === 'light' ? t('theme.light') : t('theme.dark')}
    </Button>
  ) : (
    <Tooltip
      label={colorScheme === 'light' ? t('theme.dark') : t('theme.light')}
      position="bottom"
      withArrow
    >
      <ActionIcon
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
        onClick={() => toggleColorScheme()}
      >
        {colorScheme === 'light' ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
      </ActionIcon>
    </Tooltip>
  );
}

'use client';

import { IconDevicesCog, IconMoon, IconSun } from '@tabler/icons-react';
import { ActionIcon, Tooltip, useMantineColorScheme } from '@mantine/core';

export function ColorSchemeToggle() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <Tooltip
      label={colorScheme === 'light' ? 'Dark' : colorScheme === 'dark' ? 'Light' : 'Auto'}
      position="bottom"
      withArrow
    >
      <ActionIcon
        variant="default"
        size="lg"
        aria-label="Toggle color scheme"
        onClick={() =>
          setColorScheme(
            colorScheme === 'light' ? 'dark' : colorScheme === 'dark' ? 'auto' : 'light'
          )
        }
      >
        {colorScheme === 'light' && <IconSun stroke={1.5} />}
        {colorScheme === 'dark' && <IconMoon stroke={1.5} />}
        {colorScheme === 'auto' && <IconDevicesCog stroke={1.5} />}
      </ActionIcon>
    </Tooltip>
  );
}

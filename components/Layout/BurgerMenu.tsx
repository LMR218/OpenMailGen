'use client';

import Link from 'next/link';
import { IconBrandGithub, IconHome, IconTemplate } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Burger, Button, Divider, Drawer, Group, NavLink, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { SettingsDrawer } from '../SettingsDrawer/SettingsDrawer';
import { useStateContext } from './stateContext';

export default function BurgerMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const { isMobileView } = useStateContext();
  const t = useTranslations();

  return (
    <>
      <Burger
        hiddenFrom="sm"
        hidden={opened}
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />

      <Drawer opened={opened} onClose={close} title="OpenMailGen" size="xs" padding="md">
        <Stack>
          <Stack gap={4}>
            <Group grow gap={0}>
              <Text size="sm" fw={500} c="dimmed">
                {t('Common.pages')}
              </Text>
              <Divider />
            </Group>
            <NavLink
              component={Link}
              href="/"
              label={t('Common.home')}
              leftSection={<IconHome size={18} />}
              onClick={close}
            />
            <NavLink
              component={Link}
              href="/templates"
              label={t('Common.routes.templates')}
              onClick={close}
              leftSection={<IconTemplate size={18} />}
            />
          </Stack>

          <Stack>
            <Group grow gap={0}>
              <Text size="sm" fw={500} c="dimmed">
                {t('Common.actions')}
              </Text>
              <Divider />
            </Group>

            <SettingsDrawer />

            <ColorSchemeToggle withText />

            <Button
              component={Link}
              href="https://github.com/LMR218/OpenMailGen"
              target="_blank"
              variant="default"
              leftSection={<IconBrandGithub />}
              fullWidth={isMobileView}
              justify="start"
            >
              Github
            </Button>
          </Stack>

          <Stack>
            <Group grow gap={0}>
              <Text size="sm" fw={500} c="dimmed">
                {t('Common.languages')}
              </Text>
              <Divider />
            </Group>
            <LanguageSelect />
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

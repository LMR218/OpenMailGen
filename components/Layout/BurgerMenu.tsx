'use client';

import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Burger, Divider, Drawer, Group, NavLink, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { SettingsDrawer } from '../SettingsDrawer/SettingsDrawer';

export default function BurgerMenu() {
  const [opened, { toggle, close }] = useDisclosure(false);
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
            <NavLink component={Link} href="/" label={t('Common.home')} onClick={close} />
            <NavLink
              component={Link}
              href="/templates"
              label={t('Common.routes.templates')}
              onClick={close}
            />
          </Stack>

          <Stack>
            <Group grow gap={0}>
              <Text size="sm" fw={500} c="dimmed">
                {t('Common.actions')}
              </Text>
              <Divider />
            </Group>

            <Group px="md" gap={0} justify="space-between">
              <SettingsDrawer />

              <Divider orientation="vertical" />

              <ColorSchemeToggle />

              <Divider orientation="vertical" />

              <Link
                aria-label="Github Repo"
                href="https://github.com/LMR218/OpenMailGen"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ActionIcon variant="default" size="lg" aria-label="Github Repo">
                  <IconBrandGithub stroke={1.5} />
                </ActionIcon>
              </Link>
            </Group>
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

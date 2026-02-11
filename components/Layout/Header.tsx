import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { useLocale, useTranslations } from 'next-intl';
import { ActionIcon, AppShellHeader, Box, Container, Group, Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import { SettingsDrawer } from '../SettingsDrawer/SettingsDrawer';
import BurgerMenu from './BurgerMenu';
import classes from './header.module.css';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <AppShellHeader className={classes.appHeader}>
      <Container size="xl" className={classes.container} py="xs">
        <Link aria-label="Home page" href={`/${locale}`} className={classes.link}>
          <Title order={3}>OpenMailGen</Title>
        </Link>

        {/* Desktop Navigation */}
        <Box visibleFrom="sm" className={classes.desktopNav}>
          <Link aria-label="Templates page" href={`/${locale}/templates`} className={classes.link}>
            <Text fw="bold">{t('Common.routes.templates')}</Text>
          </Link>
        </Box>

        {/* Desktop Actions */}
        <Group className={classes.desktopActions} visibleFrom="sm">
          <LanguageSelect />
          <SettingsDrawer />
          <ColorSchemeToggle />
          <Link
            aria-label="Github Repo"
            href="https://github.com/LMR218/OpenMailGen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ActionIcon color="dark.5" size="lg" aria-label="Github Repo">
              <IconBrandGithub stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>

        {/* Mobile Burger Menu */}
        <BurgerMenu />
      </Container>
    </AppShellHeader>
  );
}

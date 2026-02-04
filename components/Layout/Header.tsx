import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import { ActionIcon, AppShellHeader, Container, Group, Text, Title } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

export default function Header() {
  return (
    <AppShellHeader
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container
        size="xl"
        style={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1 }}
        py="xs"
      >
        <Link aria-label="Home page" href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Title order={3}>OpenMailGen</Title>
        </Link>

        <Group>
          <Link
            aria-label="FAQ page"
            href="/FAQ"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Text fw="bold">FAQ</Text>
          </Link>
        </Group>

        <Group>
          <ColorSchemeToggle />
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
      </Container>
    </AppShellHeader>
  );
}

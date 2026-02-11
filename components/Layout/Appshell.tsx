'use client';

import { AppShell, AppShellMain, Container } from '@mantine/core';
import Footer from './Footer';
import Header from './Header';
import { useStateContext } from './stateContext';

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  const { asideOpen } = useStateContext();

  return (
    <AppShell
      layout="alt"
      header={{ height: 60 }}
      footer={{ height: 60, offset: true }}
      aside={{
        width: { base: '100%', md: 400, lg: 500 },
        breakpoint: 'md',
        collapsed: { mobile: !asideOpen, desktop: !asideOpen },
      }}
      padding={{ base: 'xs', md: 'md' }}
    >
      <Header />

      <AppShellMain>
        <Container size="xl" p={{ base: 0, md: 'md' }}>
          {children}
        </Container>
      </AppShellMain>

      <Footer />
    </AppShell>
  );
}

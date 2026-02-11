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
        width: 400,
        breakpoint: 'md',
        collapsed: { mobile: !asideOpen, desktop: asideOpen },
      }}
      padding="md"
    >
      <Header />

      <AppShellMain>
        <Container size="xl">{children}</Container>
      </AppShellMain>

      <Footer />
    </AppShell>
  );
}

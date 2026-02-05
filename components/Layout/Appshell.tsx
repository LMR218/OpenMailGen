import { AppShell, AppShellMain, Container } from '@mantine/core';
import Footer from './Footer';
import Header from './Header';

export default function AppShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell header={{ height: 60 }} footer={{ height: 60, offset: true }} padding="md">
      <Header />
      <AppShellMain>
        <Container size="xl">{children}</Container>
      </AppShellMain>
      <Footer />
    </AppShell>
  );
}

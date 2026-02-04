import { AppShellFooter, Text } from '@mantine/core';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <AppShellFooter
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginInline: '1rem',
        paddingBlock: '0.5rem',
      }}
    >
      <Text>{CURRENT_YEAR} OpenMailGen. All rights reserved.</Text>
    </AppShellFooter>
  );
}

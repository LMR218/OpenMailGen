import Link from 'next/link';
import { Button, Flex, Text, Title } from '@mantine/core';

export default function NotFound() {
  return (
    <Flex
      h="calc(100vh - var(--app-shell-header-height) - var(--app-shell-footer-height) - var(--app-shell-footer-offset))"
      direction="column"
      justify="center"
      align="center"
    >
      <Title order={1} fz="12rem">
        404
      </Title>
      <Text fz="2rem"> Page Not Found</Text>
      <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Button m="2rem">Home</Button>
      </Link>
    </Flex>
  );
}

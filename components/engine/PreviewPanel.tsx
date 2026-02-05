import { Card, Divider, ScrollArea, Text, Title } from '@mantine/core';

interface PreviewPanelProps {
  subject: string;
  body: string;
}

export function PreviewPanel({ subject, body }: PreviewPanelProps) {
  return (
    <Card withBorder p="lg" radius="md" shadow="md">
      <Title order={4} mb="xs">
        {subject}
      </Title>

      <Divider my="sm" />

      <ScrollArea h="100%">
        <Text style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{body}</Text>
      </ScrollArea>
    </Card>
  );
}

'use client';

import { useState } from 'react';
import { IconCheck, IconCopy, IconEdit, IconSend } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ActionIcon, Card, Divider, Group, Title, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import { useStateContext } from '../Layout/stateContext';

interface EmailActionsProps {
  subject: string;
  body: string;
}

export function EmailActions({ subject, body }: EmailActionsProps) {
  const t = useTranslations('Common');
  const clipboard = useClipboard({ timeout: 2000 });
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullEmail = `${subject}\n\n${body}`;
    clipboard.copy(fullEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMailto = () => {
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  const { toggleAside } = useStateContext();
  return (
    <Card withBorder shadow="md" p="xs">
      <Group gap={4}>
        <Title order={4} fz={{ base: '1rem', md: '1.25rem' }} me="auto">
          {t('preview_section')}
        </Title>
        <Tooltip label={t('edit_details')}>
          <ActionIcon variant="subtle" size="md" onClick={toggleAside}>
            <IconEdit size="80%" />
          </ActionIcon>
        </Tooltip>

        <Divider orientation="vertical" />

        <Tooltip label={copied ? t('copied') : t('copy')}>
          <ActionIcon
            variant={copied ? 'filled' : 'subtle'}
            color={copied ? 'green' : undefined}
            size="md"
            onClick={handleCopy}
          >
            {copied ? <IconCheck size="80%" /> : <IconCopy size="80%" />}
          </ActionIcon>
        </Tooltip>

        <Tooltip label={t('open_email')}>
          <ActionIcon variant="subtle" size="md" onClick={handleMailto}>
            <IconSend size="80%" />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Card>
  );
}

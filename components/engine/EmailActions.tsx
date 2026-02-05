'use client';

import { useState } from 'react';
import { IconCheck, IconCopy, IconMail } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Button, Group, Tooltip } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';

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

  return (
    <Group justify="center" grow>
      <Tooltip label={copied ? t('copied') : t('copy')}>
        <Button
          w={{ base: '100%', md: '50%' }}
          variant={copied ? 'filled' : undefined}
          color={copied ? 'green' : undefined}
          leftSection={copied ? <IconCheck size={18} /> : <IconCopy size={18} />}
          onClick={handleCopy}
        >
          {copied ? t('copied') : t('copy')}
        </Button>
      </Tooltip>

      <Tooltip label={t('open_email')}>
        <Button
          w={{ base: '100%', md: '50%' }}
          leftSection={<IconMail size={18} />}
          onClick={handleMailto}
        >
          {t('open_email')}
        </Button>
      </Tooltip>
    </Group>
  );
}

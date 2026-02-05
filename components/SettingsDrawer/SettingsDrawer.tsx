'use client';

import { IconCheck, IconSettings, IconTrash } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import {
  ActionIcon,
  Button,
  Drawer,
  Group,
  Stack,
  Textarea,
  TextInput,
  Tooltip,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useProfile } from '@/lib/hooks/useProfile';

export function SettingsDrawer() {
  const t = useTranslations('Profile');
  const tCommon = useTranslations('Common');
  const [opened, { open, close }] = useDisclosure(false);
  const { profile, updateProfile, resetProfile, isProfileComplete } = useProfile();

  return (
    <>
      <Tooltip label={tCommon('profile')}>
        <ActionIcon
          size="lg"
          aria-label={tCommon('profile')}
          onClick={open}
          color={isProfileComplete ? 'blue.6' : 'orange.6'}
        >
          <IconSettings stroke={1.5} />
        </ActionIcon>
      </Tooltip>

      <Drawer opened={opened} onClose={close} title={t('title')} offset={8} radius="md">
        <Stack>
          <TextInput
            label={t('full_name')}
            placeholder="John Doe"
            value={profile.fullName}
            onChange={(e) => updateProfile({ fullName: e.target.value })}
            required
            data-autofocus
          />

          <TextInput
            label={t('job_title')}
            placeholder="Software Engineer"
            value={profile.jobTitle}
            onChange={(e) => updateProfile({ jobTitle: e.target.value })}
            required
          />

          <TextInput
            label={t('company_name')}
            placeholder="Acme Inc."
            value={profile.companyName}
            onChange={(e) => updateProfile({ companyName: e.target.value })}
            required
          />

          <Textarea
            label={t('signature')}
            placeholder="Best regards,&#10;John Doe"
            value={profile.signature || ''}
            onChange={(e) => updateProfile({ signature: e.target.value })}
            minRows={3}
            autosize
          />

          <Group grow>
            <Button
              variant="light"
              color="red"
              leftSection={<IconTrash size={18} />}
              onClick={resetProfile}
            >
              {t('clear')}
            </Button>
            <Button
              leftSection={<IconCheck size={18} />}
              onClick={close}
              disabled={!isProfileComplete}
            >
              {t('save')}
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
}

'use client';

import { IconCheck, IconSettings, IconTrash } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { Button, Drawer, Group, Stack, Textarea, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useProfile } from '@/lib/hooks/useProfile';
import { useStateContext } from '../Layout/stateContext';

export function SettingsDrawer() {
  const t = useTranslations();
  const [opened, { open, close }] = useDisclosure(false);
  const { profile, updateProfile, resetProfile, isProfileComplete } = useProfile();
  const { isMobileView } = useStateContext();

  return (
    <>
      <Button
        onClick={open}
        color={isProfileComplete ? 'blue' : 'red'}
        leftSection={<IconSettings />}
        fullWidth={isMobileView}
        justify="start"
      >
        {t('Common.profile')}
      </Button>

      <Drawer opened={opened} onClose={close} title={t('Profile.title')} offset={8} radius="md">
        <Stack>
          <TextInput
            label={t('Profile.full_name')}
            placeholder="John Doe"
            value={profile.fullName}
            onChange={(e) => updateProfile({ fullName: e.target.value })}
            required
            data-autofocus
          />

          <TextInput
            label={t('Profile.job_title')}
            placeholder="Software Engineer"
            value={profile.jobTitle}
            onChange={(e) => updateProfile({ jobTitle: e.target.value })}
            required
          />

          <TextInput
            label={t('Profile.company_name')}
            placeholder="Acme Inc."
            value={profile.companyName}
            onChange={(e) => updateProfile({ companyName: e.target.value })}
            required
          />

          <Textarea
            label={t('Profile.signature')}
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
              {t('Profile.clear')}
            </Button>
            <Button
              leftSection={<IconCheck size={18} />}
              onClick={close}
              disabled={!isProfileComplete}
            >
              {t('Profile.save')}
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
}

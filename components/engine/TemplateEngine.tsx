'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Stack, Title } from '@mantine/core';
import type { Template } from '@/config/templates';
import { useProfile } from '@/lib/hooks/useProfile';
import { buildInterpolationData } from '@/lib/utils/interpolation';
import { EmailActions } from './EmailActions';
import { FormGenerator } from './FormGenerator';
import { PreviewPanel } from './PreviewPanel';

interface TemplateEngineProps {
  template: Template;
}

export function TemplateEngine({ template }: TemplateEngineProps) {
  const t = useTranslations();
  const { profile } = useProfile();
  const [formValues, setFormValues] = useState<Record<string, any>>({});

  const handleChange = (key: string, value: any) => {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  };

  const interpolationData = buildInterpolationData(template, formValues, profile, t);

  const templateName = t(`Templates.${template.id}.name`);
  const subject = t(`Templates.${template.id}.subject`, interpolationData);
  const body = t(`Templates.${template.id}.body`, interpolationData);

  return (
    <Stack role="main" aria-label={templateName}>
      <Title order={2} id="template-title">
        {templateName}
      </Title>

      <EmailActions subject={subject} body={body} />

      <PreviewPanel subject={subject} body={body} />

      <FormGenerator template={template} values={formValues} onChange={handleChange} />
    </Stack>
  );
}

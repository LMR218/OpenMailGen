'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, Grid, GridCol, Stack, Title } from '@mantine/core';
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

      <Grid>
        <GridCol span={{ base: 12, xs: 6, sm: 4, md: 4 }}>
          <Title mb="xs" order={3} id="form-section">
            {t('Common.email_data')}
          </Title>
          <Card withBorder shadow="md" component="section" p="md">
            <FormGenerator template={template} values={formValues} onChange={handleChange} />
          </Card>
        </GridCol>

        <GridCol span={{ base: 12, xs: 6, sm: 8, md: 8 }}>
          <Title mb="xs" order={3} id="preview-section">
            {t('Common.preview_section')}
          </Title>
          <PreviewPanel subject={subject} body={body} />
        </GridCol>
      </Grid>

      <Card withBorder shadow="md" component="section" p="xs">
        <EmailActions subject={subject} body={body} />
      </Card>
    </Stack>
  );
}

import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Badge,
  Card,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { Template, templates, type TemplateCategory } from '@/config/templates';
import { localeValues } from '@/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return localeValues.map((locale) => ({ locale }));
}

export default async function TemplatesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();

  /** Group templates by category */
  const byCategory = templates.reduce(
    (acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    },
    {} as Record<TemplateCategory, typeof templates>
  );

  /** Category order */
  const categoryOrder: TemplateCategory[] = ['time_off', 'general', 'hr_requests', 'meetings'];

  /** Get categories that have templates */
  const categoriesWithTemplates = categoryOrder.filter(
    (category) => byCategory[category]?.length > 0
  );

  return (
    <Stack>
      <Title order={1}>{t('Common.select_template')}</Title>

      {categoriesWithTemplates.length === 0 ? (
        <Group justify="center" align="center" h={60}>
          <Text>{t('Categories.noneFound')}</Text>
        </Group>
      ) : (
        <Accordion radius="md" variant="separated" defaultValue={categoriesWithTemplates[0]}>
          {categoryOrder.map((category) => {
            const categoryTemplates = byCategory[category];
            if (!categoryTemplates?.length) {
              return null;
            }

            return (
              <AccordionItem key={category} value={category}>
                <AccordionControl>
                  <Group>
                    <Title order={4}>{t(`Categories.${category}`)}</Title>
                    <Badge variant="light">{categoryTemplates.length}</Badge>
                  </Group>
                </AccordionControl>
                <AccordionPanel>
                  <Grid>
                    {categoryTemplates.map((template) => (
                      <GridCol key={template.id} span={{ base: 12, sm: 6, md: 4 }}>
                        <TemplateCard template={template} translationFN={t} locale={locale} />
                      </GridCol>
                    ))}
                  </Grid>
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </Stack>
  );
}

function TemplateCard({
  template,
  translationFN: t,
  locale,
}: {
  template: Template;
  translationFN: (key: string) => string;
  locale: string;
}) {
  return (
    <>
      <style>
        {`
        .card {
          background: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-6));

          cursor: pointer;
          transition: all 0.2s ease-in-out;
          &:hover {
            transform: translateY(-5px) scale(1.025);
          }
        }
      `}
      </style>
      <Link href={`/${locale}/templates/${template.id}`} style={{ textDecoration: 'none' }}>
        <Card className="card" padding="lg" radius="md" shadow="sm">
          <Text fw={600} size="lg">
            {t(`Templates.${template.id}.name`)}
          </Text>
          <Text size="sm" c="dimmed" mt="xs">
            {template.inputs.length} {t('Common.fields')}
          </Text>
        </Card>
      </Link>
    </>
  );
}

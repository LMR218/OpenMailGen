import Link from 'next/link';
import { IconTemplate, IconUser, IconWorld } from '@tabler/icons-react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { localeValues } from '@/i18n/config';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return localeValues.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('Landing');

  const features = [
    {
      key: 'templates',
      icon: IconTemplate,
      color: 'blue',
    },
    {
      key: 'personalization',
      icon: IconUser,
      color: 'green',
    },
    {
      key: 'bilingual',
      icon: IconWorld,
      color: 'violet',
    },
  ];

  const faqItems = ['free', 'data', 'templates', 'contribute'];

  return (
    <Stack gap={80}>
      {/* Hero Section */}
      <Box
        component="section"
        py={80}
        style={{
          background:
            'linear-gradient(135deg, light-dark(var(--mantine-color-blue-0), var(--mantine-color-teal-9)) 0%, light-dark(var(--mantine-color-violet-0), var(--mantine-color-violet-9)) 70%)',
          borderRadius: 'var(--mantine-radius-lg)',
        }}
      >
        <Container size="md">
          <Stack align="center" gap="xl" ta="center">
            <Group gap="xs">
              <Title order={1} size="3rem">
                OpenMailGen
              </Title>
            </Group>

            <Title order={2} fw={400} size="h2">
              {t('hero.title')}
            </Title>

            <Text size="xl" maw={600}>
              {t('hero.subtitle')}
            </Text>

            <Link href={`/${locale}/templates`}>
              <Button size="xl" radius="md" mt="md">
                {t('hero.cta')}
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Container component="section" size="lg" id="about">
        <Stack gap="xl">
          <Title order={2} ta="center">
            {t('about.title')}
          </Title>

          <Text size="lg" ta="center" maw={800} mx="auto" c="dimmed">
            {t('about.description')}
          </Text>

          <Grid mt="xl">
            {features.map((feature) => (
              <GridCol key={feature.key} span={{ base: 12, sm: 4 }}>
                <Card padding="xl" radius="md" h="100%">
                  <Stack align="center" ta="center" gap="md">
                    <ThemeIcon size={60} radius="md" variant="light" color={feature.color}>
                      <feature.icon size={32} stroke={1.5} />
                    </ThemeIcon>

                    <Title order={4}>{t(`about.features.${feature.key}.title`)}</Title>

                    <Text size="sm" c="dimmed">
                      {t(`about.features.${feature.key}.description`)}
                    </Text>
                  </Stack>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Stack>
      </Container>

      {/* FAQ Section */}
      <Box
        component="section"
        py={60}
        id="faq"
        style={{
          background: 'light-dark(var(--mantine-color-gray-0), var(--mantine-color-gray-8))',
          borderRadius: 'var(--mantine-radius-lg)',
        }}
      >
        <Container size="md">
          <Stack gap="xl">
            <Title order={2} ta="center">
              {t('faq.title')}
            </Title>

            <Accordion variant="separated" radius="md">
              {faqItems.map((item) => (
                <AccordionItem key={item} value={item}>
                  <AccordionControl>
                    <Text fw={500}>{t(`faq.items.${item}.question`)}</Text>
                  </AccordionControl>
                  <AccordionPanel>
                    <Text c="dimmed">{t(`faq.items.${item}.answer`)}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}

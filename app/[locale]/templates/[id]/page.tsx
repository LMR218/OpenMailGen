import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { TemplateEngine } from '@/components/engine';
import { getTemplateById, templates } from '@/config/templates';
import { localeValues } from '@/i18n/config';

interface TemplatePageProps {
  params: Promise<{ locale: string; id: string }>;
}

export function generateStaticParams() {
  // Generate all combinations of locale and template id
  const params: { locale: string; id: string }[] = [];

  for (const locale of localeValues) {
    for (const template of templates) {
      params.push({ locale, id: template.id });
    }
  }

  return params;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  return <TemplateEngine template={template} />;
}

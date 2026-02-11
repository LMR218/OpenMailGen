---
post_title: Adding Email Templates
author1: OpenMailGen Maintainers
post_slug: adding-email-templates
microsoft_alias: n/a
featured_image: https://placehold.co/1200x630.png
categories:
  - documentation
tags:
  - templates
  - i18n
  - contributing
ai_note: Assisted by AI.
summary: Steps and checklist for adding new email templates and translations.
post_date: 2026-02-11
---

## Overview

This guide explains how to add a new email template, wire up translations,
and ensure it renders correctly in the UI.

## Template structure

Templates are defined in category files under config/templates/ and must
match Template from config/templates/types.ts.

Example:

```ts
import type { Template } from './types';

export const generalTemplates: Template[] = [
  {
    id: 'intro_follow_up',
    category: 'general',
    inputs: [
      {
        key: 'recipientName',
        type: 'text',
        labelKey: 'recipient_name_label',
        required: true,
      },
      {
        key: 'introContext',
        type: 'textarea',
        labelKey: 'intro_context_label',
        required: true,
      },
    ],
  },
];
```

Notes:
- id must be unique across all templates.
- category must match the file you place it in.
- labelKey values map to translation keys under Templates.<id>.fields.

## Step-by-step

1. Pick the category file in config/templates/ (for example, general.ts).
2. Add a new Template entry with id, category, and inputs.
3. Add translations for name, subject, body, and fields in:
   - i18n/messages/en/[category].json
   - i18n/messages/ar/[category].json
4. Verify the route builds via SSG and the template renders.

## Translation structure

Each template must supply name, subject, body, and fields.

```json
{
  "intro_follow_up": {
    "name": "Introduction follow-up",
    "subject": "Following up on our introduction",
    "body": "Hello {recipientName}, ...",
    "fields": {
      "recipient_name_label": "Recipient name",
      "intro_context_label": "Context"
    }
  }
}
```

## Rendering flow

- app/[locale]/templates/[id]/page.tsx selects the template by id.
- TemplateEngine builds subject and body with interpolation.
- FormGenerator renders inputs based on the template inputs array.

## UI behavior

Responsive layout and RTL are handled globally. You do not need to add UI
logic for direction or layout when adding a template.

## Checklist

- [ ] Added template definition in config/templates/<category>.ts.
- [ ] Added translations in i18n/messages/en/<category>.json.
- [ ] Added translations in i18n/messages/ar/<category>.json.
- [ ] Included name, subject, body, and fields for the template id.
- [ ] Verified the template renders and interpolates as expected.

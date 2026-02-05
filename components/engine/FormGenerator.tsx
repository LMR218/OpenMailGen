'use client';

import { useTranslations } from 'next-intl';
import { NumberInput, Select, Stack, Textarea, TextInput } from '@mantine/core';
import { DateInput, DatePickerInput, TimeInput } from '@mantine/dates';
import type { Template, TemplateInput } from '@/config/templates';

interface FormGeneratorProps {
  template: Template;
  values: Record<string, any>;
  onChange: (key: string, value: any) => void;
}

export function FormGenerator({ template, values, onChange }: FormGeneratorProps) {
  const t = useTranslations(`Templates.${template.id}.fields`);

  const renderInput = (input: TemplateInput) => {
    const label = t(input.labelKey);

    const defaultValue = input.type === 'daterange' ? [null, null] : '';
    const value = values[input.key] ?? defaultValue;
    const inputId = `field-${input.key}`;
    const describedById = input.required ? `${inputId}-required` : undefined;

    const commonProps = {
      id: inputId,
      label,
      required: input.required,
      placeholder: input.placeholder,
      'aria-describedby': describedById,
      'aria-required': input.required || undefined,
    };

    switch (input.type) {
      case 'text':
        return (
          <TextInput
            {...commonProps}
            value={value}
            onChange={(e) => onChange(input.key, e.target.value)}
            autoComplete="off"
          />
        );

      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            value={value}
            onChange={(e) => onChange(input.key, e.target.value)}
            minRows={3}
            autosize
          />
        );

      case 'number':
        return (
          <NumberInput
            {...commonProps}
            value={value}
            onChange={(val) => onChange(input.key, val)}
            inputMode="numeric"
          />
        );

      case 'date':
        return (
          <DateInput
            {...commonProps}
            value={value}
            onChange={(val) => onChange(input.key, val)}
            valueFormat="DD/MM/YYYY"
            aria-label={`${label} date picker`}
          />
        );

      case 'time':
        return (
          <TimeInput
            {...commonProps}
            value={value}
            onChange={(e) => onChange(input.key, e.target.value)}
            aria-label={`${label} time input`}
          />
        );

      case 'daterange':
        return (
          <DatePickerInput
            {...commonProps}
            type="range"
            value={value}
            onChange={(val) => onChange(input.key, val)}
            valueFormat="DD/MM/YYYY"
            aria-label={`${label} date range picker`}
          />
        );

      case 'select':
        return (
          <Select
            {...commonProps}
            value={value}
            onChange={(val) => onChange(input.key, val)}
            aria-label={`${label} dropdown`}
            data={
              input.options?.map((opt) => ({
                value: opt.value,
                label: t(opt.labelKey),
              })) || []
            }
          />
        );

      default:
        return null;
    }
  };

  return (
    <Stack gap="md" role="group" aria-label="Email form fields">
      {template.inputs.map((input) => (
        <div key={input.key}>{renderInput(input)}</div>
      ))}
    </Stack>
  );
}

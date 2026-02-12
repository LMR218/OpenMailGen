'use client';

import { IconX } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import {
  ActionIcon,
  AppShell,
  Flex,
  NumberInput,
  Select,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { DateInput, DatePickerInput, TimeInput } from '@mantine/dates';
import type { FormValues, SelectInput, Template, TemplateInput } from '@/config/templates';
import { useStateContext } from '../Layout/stateContext';

interface FormGeneratorProps {
  template: Template;
  values: FormValues;
  onChange: (key: string, value: any) => void;
}

function isSelectInput(input: TemplateInput): input is SelectInput {
  return input.type === 'select';
}

export function FormGenerator({ template, values, onChange }: FormGeneratorProps) {
  const t = useTranslations();

  const getFieldLabel = (input: TemplateInput): string => {
    return t(`Templates.${template.id}.fields.${input.labelKey}`);
  };

  const renderInput = (input: TemplateInput) => {
    const label = getFieldLabel(input);
    const value = values[input.key];
    const inputId = `field-${input.key}`;

    const commonProps = {
      id: inputId,
      label,
      required: input.required,
      placeholder: input.placeholder,
      disabled: input.disabled,
      'aria-required': input.required || undefined,
    };

    switch (input.type) {
      case 'text':
        return (
          <TextInput
            {...commonProps}
            value={(value as string) ?? ''}
            onChange={(e) => onChange(input.key, e.target.value)}
            maxLength={input.maxLength}
            pattern={input.pattern}
            autoComplete="off"
          />
        );

      case 'textarea':
        return (
          <Textarea
            {...commonProps}
            value={(value as string) ?? ''}
            onChange={(e) => onChange(input.key, e.target.value)}
            minRows={input.minRows ?? 3}
            maxRows={input.maxRows}
            autosize
          />
        );

      case 'number':
        return (
          <NumberInput
            {...commonProps}
            value={(value as number) ?? undefined}
            onChange={(val) => onChange(input.key, val)}
            min={input.min}
            max={input.max}
            step={input.step}
            inputMode="numeric"
          />
        );

      case 'date':
        return (
          <DateInput
            {...commonProps}
            value={(value as Date) ?? null}
            onChange={(val) => onChange(input.key, val)}
            minDate={input.minDate}
            maxDate={input.maxDate}
            valueFormat="DD/MM/YYYY"
            aria-label={`${label} date picker`}
          />
        );

      case 'time':
        return (
          <TimeInput
            {...commonProps}
            value={(value as string) ?? ''}
            onChange={(e) => onChange(input.key, e.target.value)}
            aria-label={`${label} time input`}
          />
        );

      case 'daterange':
        return (
          <DatePickerInput
            {...commonProps}
            type="range"
            value={(value as [Date, Date]) ?? [null, null]}
            onChange={(val) => onChange(input.key, val)}
            minDate={input.minDate}
            maxDate={input.maxDate}
            valueFormat="DD/MM/YYYY"
            aria-label={`${label} date range picker`}
          />
        );

      case 'select': {
        if (!isSelectInput(input)) {
          return null;
        }

        return (
          <Select
            {...commonProps}
            value={(value as string) ?? null}
            onChange={(val) => onChange(input.key, val)}
            aria-label={`${label} dropdown`}
            data={input.options.map((opt) => ({
              value: opt.value,
              label: t(`Templates.${template.id}.fields.${opt.labelKey}`),
            }))}
          />
        );
      }

      default:
        return null;
    }
  };

  const { toggleAside } = useStateContext();

  return (
    <AppShell.Aside px="md" role="group" aria-label="Email form fields">
      <AppShell.Section
        p={0}
        h="var(--app-shell-header-height)"
        style={{ borderBottom: '1px solid var(--mantine-color-disabled-border)' }}
      >
        <Flex p={0} h="100%" align="center" justify="space-between">
          <Title order={3} fz={{ base: '1rem', md: '1.25rem' }}>
            {t('Common.email_data', { defaultValue: 'Email Fields' })}
          </Title>

          <ActionIcon variant="subtle" color="red.4" onClick={toggleAside} aria-label="Close form">
            <IconX size={20} />
          </ActionIcon>
        </Flex>
      </AppShell.Section>

      <AppShell.Section grow py="md">
        <Flex gap="sm" direction="column">
          {template.inputs.map((input) => (
            <div key={input.key}>{renderInput(input)}</div>
          ))}
        </Flex>
      </AppShell.Section>
    </AppShell.Aside>
  );
}

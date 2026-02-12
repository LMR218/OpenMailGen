import type {
  DateInput,
  DateRangeInput,
  NumberInput,
  SelectInput,
  SelectOption,
  TextareaInput,
  TextInput,
  TimeInput,
} from '@/config/templates';

/**
 * Factory class for building form inputs with type safety
 * Provides a fluent API for creating form field definitions
 */
export class FormInputBuilder {
  /**
   * Create a text input field
   */
  static text(
    key: string,
    labelKey: string,
    options?: Partial<Omit<TextInput, 'type' | 'key' | 'labelKey'>>
  ): TextInput {
    return { type: 'text', key, labelKey, ...options };
  }

  /**
   * Create a textarea input field
   */
  static textarea(
    key: string,
    labelKey: string,
    options?: Partial<Omit<TextareaInput, 'type' | 'key' | 'labelKey'>>
  ): TextareaInput {
    return { type: 'textarea', key, labelKey, minRows: 3, ...options };
  }

  /**
   * Create a select dropdown field
   */
  static select(
    key: string,
    labelKey: string,
    options: SelectOption[],
    extraOptions?: Partial<Omit<SelectInput, 'type' | 'key' | 'labelKey' | 'options'>>
  ): SelectInput {
    return { type: 'select', key, labelKey, options, ...extraOptions };
  }

  /**
   * Create a date picker field
   */
  static date(
    key: string,
    labelKey: string,
    options?: Partial<Omit<DateInput, 'type' | 'key' | 'labelKey'>>
  ): DateInput {
    return { type: 'date', key, labelKey, ...options };
  }

  /**
   * Create a date range picker field
   */
  static dateRange(
    key: string,
    labelKey: string,
    options?: Partial<Omit<DateRangeInput, 'type' | 'key' | 'labelKey'>>
  ): DateRangeInput {
    return { type: 'daterange', key, labelKey, ...options };
  }

  /**
   * Create a number input field
   */
  static number(
    key: string,
    labelKey: string,
    options?: Partial<Omit<NumberInput, 'type' | 'key' | 'labelKey'>>
  ): NumberInput {
    return { type: 'number', key, labelKey, ...options };
  }

  /**
   * Create a time input field
   */
  static time(
    key: string,
    labelKey: string,
    options?: Partial<Omit<TimeInput, 'type' | 'key' | 'labelKey'>>
  ): TimeInput {
    return { type: 'time', key, labelKey, ...options };
  }
}

/**
 * Helper function to create select options
 */
export function createSelectOptions(values: string[], labelKeyPrefix: string): SelectOption[] {
  return values.map((value) => ({
    value,
    labelKey: `${labelKeyPrefix}_${value}_label`,
  }));
}

export type InputType = 'text' | 'textarea' | 'date' | 'select' | 'number' | 'time' | 'daterange';

export type TemplateCategory = 'time_off' | 'hr_requests' | 'meetings' | 'general';

export interface SelectOption {
  value: string;
  labelKey: string;
}

export interface BaseInput {
  key: string;
  labelKey: string;
  required?: boolean;
  placeholder?: string;
  disabled?: boolean;
}

export interface TextInput extends BaseInput {
  type: 'text';
  maxLength?: number;
  pattern?: string;
}

export interface TextareaInput extends BaseInput {
  type: 'textarea';
  minRows?: number;
  maxRows?: number;
}

export interface NumberInput extends BaseInput {
  type: 'number';
  min?: number;
  max?: number;
  step?: number;
}

export interface DateInput extends BaseInput {
  type: 'date';
  minDate?: Date;
  maxDate?: Date;
}

export interface TimeInput extends BaseInput {
  type: 'time';
}

export interface DateRangeInput extends BaseInput {
  type: 'daterange';
  minDate?: Date;
  maxDate?: Date;
}

export interface SelectInput extends BaseInput {
  type: 'select';
  options: SelectOption[];
}

export type TemplateInput =
  | TextInput
  | TextareaInput
  | NumberInput
  | DateInput
  | TimeInput
  | DateRangeInput
  | SelectInput;

export interface Template {
  id: string;
  category: TemplateCategory;
  inputs: TemplateInput[];
}

export type FormValues = Record<string, string | number | Date | [Date, Date] | null | undefined>;

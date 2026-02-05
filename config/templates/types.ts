export type InputType = 'text' | 'textarea' | 'date' | 'select' | 'number' | 'time' | 'daterange';

export type TemplateCategory = 'time_off' | 'hr_requests' | 'meetings' | 'general';

export interface TemplateInput {
  key: string;
  type: InputType;
  labelKey: string;
  options?: { value: string; labelKey: string }[];
  required?: boolean;
  placeholder?: string;
}

export interface Template {
  id: string;
  category: TemplateCategory;
  inputs: TemplateInput[];
}

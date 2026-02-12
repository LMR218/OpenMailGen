import { generalTemplates } from './templates/general';
import { hrRequestsTemplates } from './templates/hr_requests';
import { meetingsTemplates } from './templates/meetings';
import { timeOffTemplates } from './templates/time_off';
import type { Template, TemplateCategory } from './templates/types';

export type {
  InputType,
  Template,
  TemplateCategory,
  TemplateInput,
  SelectInput,
  SelectOption,
  FormValues,
  BaseInput,
  TextInput,
  TextareaInput,
  NumberInput,
  DateInput,
  TimeInput,
  DateRangeInput,
} from './templates/types';

/**
 * Combined template registry - spreads all category templates
 * Contributors: Add new templates to the appropriate category file in config/templates/
 */
export const templates: Template[] = [
  ...timeOffTemplates,
  ...hrRequestsTemplates,
  ...meetingsTemplates,
  ...generalTemplates,
];

export function getTemplateById(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}

export function getTemplatesByCategory(category: TemplateCategory): Template[] {
  return templates.filter((t) => t.category === category);
}

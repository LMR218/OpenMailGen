# Form Builder Factory Usage

This file demonstrates how to use the `FormInputBuilder` factory for creating form inputs with better type safety and cleaner syntax.

## Basic Usage

```typescript
import { createSelectOptions, FormInputBuilder } from '@/lib/form-builder/factory';
import type { Template } from './types';

// Example: Creating a leave request template with the factory
export const leaveRequestTemplate: Template = {
  id: 'leave_request',
  category: 'time_off',
  inputs: [
    // Simple text input
    FormInputBuilder.text('managerName', 'manager_label', {
      required: true,
    }),

    // Date input with min/max dates
    FormInputBuilder.date('leaveDate', 'date_label', {
      required: true,
      minDate: new Date(), // Can't select past dates
    }),

    // Select with options
    FormInputBuilder.select(
      'leaveDuration',
      'duration_label',
      [
        { value: '1_hour', labelKey: 'duration_1_hour_label' },
        { value: '2_hours', labelKey: 'duration_2_hours_label' },
        { value: 'half_day', labelKey: 'duration_half_day_label' },
      ],
      { required: true }
    ),

    // Textarea with custom rows
    FormInputBuilder.textarea('reason', 'reason_label', {
      minRows: 4,
      maxRows: 10,
    }),
  ],
};
```

## Advanced Examples

### Creating Select Options Programmatically

```typescript
// Helper to create duration options
const durationOptions = createSelectOptions(
  ['1_hour', '2_hours', 'half_day', 'full_day'],
  'duration'
);

// Use in template
FormInputBuilder.select('duration', 'duration_label', durationOptions, {
  required: true,
  placeholder: 'Select duration...',
});
```

### Date Range with Restrictions

```typescript
const today = new Date();
const maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 6); // Max 6 months in future

FormInputBuilder.dateRange('vacationDates', 'vacation_dates_label', {
  required: true,
  minDate: today,
  maxDate: maxDate,
});
```

### Number Input with Validation

```typescript
FormInputBuilder.number('hoursRequested', 'hours_label', {
  required: true,
  min: 1,
  max: 8,
  step: 0.5,
});
```

### Text Input with Pattern Validation

```typescript
FormInputBuilder.text('employeeId', 'employee_id_label', {
  required: true,
  pattern: '[A-Z]{2}[0-9]{4}', // Example: AB1234
  maxLength: 6,
});
```

## Benefits

1. **Type Safety**: Full TypeScript support with autocomplete
2. **Cleaner Syntax**: More readable than object literals
3. **Default Values**: Sensible defaults applied automatically
4. **Validation**: Compile-time checks for required fields
5. **Consistency**: Enforces consistent structure across templates

## Migration Example

### Before (Manual Object Creation)

```typescript
{
  key: 'leaveDuration',
  type: 'select',
  labelKey: 'duration_label',
  options: [
    { value: '1_hour', labelKey: 'duration_1_hour_label' },
    { value: '2_hours', labelKey: 'duration_2_hours_label' },
  ],
  required: true,
}
```

### After (Using Factory)

```typescript
FormInputBuilder.select(
  'leaveDuration',
  'duration_label',
  [
    { value: '1_hour', labelKey: 'duration_1_hour_label' },
    { value: '2_hours', labelKey: 'duration_2_hours_label' },
  ],
  { required: true }
);
```

## Testing

The factory makes it easy to create test fixtures:

```typescript
import { FormInputBuilder } from '@/lib/form-builder/factory';

const testInputs = [
  FormInputBuilder.text('name', 'name_label', { required: true }),
  FormInputBuilder.date('date', 'date_label', { required: true }),
];

// Use in tests
expect(testInputs[0].type).toBe('text');
expect(testInputs[0].required).toBe(true);
```

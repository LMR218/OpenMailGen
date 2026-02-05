import type { Template } from './types';

export const timeOffTemplates: Template[] = [
  {
    id: 'day_off',
    category: 'time_off',
    inputs: [
      { key: 'managerName', type: 'text', labelKey: 'manager_label', required: true },
      { key: 'leaveDate', type: 'date', labelKey: 'date_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label' },
    ],
  },
  {
    id: 'sick_leave_sudden',
    category: 'time_off',
    inputs: [
      { key: 'managerName', type: 'text', labelKey: 'manager_label', required: true },
      { key: 'leaveDate', type: 'date', labelKey: 'date_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label' },
    ],
  },
  {
    id: 'vacation_request',
    category: 'time_off',
    inputs: [
      { key: 'managerName', type: 'text', labelKey: 'manager_label', required: true },
      { key: 'dateRange', type: 'daterange', labelKey: 'date_range_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label' },
    ],
  },
];

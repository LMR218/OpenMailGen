import type { Template } from './types';

export const timeOffTemplates: Template[] = [
  {
    id: 'day_off',
    category: 'time_off',
    inputs: [
      { key: 'managerName', type: 'text', labelKey: 'manager_label', required: true },
      { key: 'managerRole', type: 'text', labelKey: 'manager_role_label' },
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
  {
    id: 'leave_request',
    category: 'time_off',
    inputs: [
      { key: 'managerName', type: 'text', labelKey: 'manager_label', required: true },
      { key: 'managerRole', type: 'text', labelKey: 'manager_role_label' },
      { key: 'leaveDate', type: 'date', labelKey: 'date_label', required: true },
      {
        key: 'leaveDuration',
        type: 'select',
        labelKey: 'duration_label',
        options: [
          {
            value: '1_hour',
            labelKey: 'duration_1_hour_label',
          },
          {
            value: '2_hours',
            labelKey: 'duration_2_hours_label',
          },
          {
            value: 'half_day',
            labelKey: 'duration_half_day_label',
          },
        ],
        required: true,
      },
      { key: 'timeOfLeave', type: 'time', labelKey: 'time_of_leave_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label' },
    ],
  },
];

import type { Template } from './types';

export const hrRequestsTemplates: Template[] = [
  {
    id: 'visa_letter_request',
    category: 'hr_requests',
    inputs: [
      { key: 'destination', type: 'text', labelKey: 'destination_label', required: true },
      { key: 'purpose', type: 'text', labelKey: 'purpose_label', required: true },
      { key: 'travelDates', type: 'daterange', labelKey: 'travel_dates_label', required: true },
    ],
  },
  {
    id: 'salary_certificate',
    category: 'hr_requests',
    inputs: [
      { key: 'purpose', type: 'text', labelKey: 'purpose_label', required: true },
      { key: 'neededBy', type: 'date', labelKey: 'needed_by_label', required: true },
      { key: 'additionalInfo', type: 'textarea', labelKey: 'additional_info_label' },
    ],
  },
  {
    id: 'employment_verification',
    category: 'hr_requests',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'recipientOrg', type: 'text', labelKey: 'recipient_org_label', required: true },
      { key: 'purpose', type: 'text', labelKey: 'purpose_label', required: true },
    ],
  },
];

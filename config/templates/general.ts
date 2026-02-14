import type { Template } from './types';

export const generalTemplates: Template[] = [
  {
    id: 'thank_you',
    category: 'general',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'subject', type: 'text', labelKey: 'subject_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label', required: true },
      { key: 'additionalMessage', type: 'textarea', labelKey: 'additional_message_label' },
    ],
  },
  {
    id: 'follow_up',
    category: 'general',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'originalSubject', type: 'text', labelKey: 'original_subject_label', required: true },
      { key: 'context', type: 'textarea', labelKey: 'context_label', required: true },
      { key: 'originalDate', type: 'date', labelKey: 'original_date_label', required: true },
      { key: 'additionalContext', type: 'textarea', labelKey: 'additional_context_label' },
    ],
  },
  {
    id: 'introduction',
    category: 'general',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'background', type: 'textarea', labelKey: 'background_label' },
      {
        key: 'connectionPurpose',
        type: 'text',
        labelKey: 'connection_purpose_label',
        required: true,
      },
    ],
  },
];

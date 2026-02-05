import type { Template } from './types';

export const meetingsTemplates: Template[] = [
  {
    id: 'meeting_notes',
    category: 'meetings',
    inputs: [
      { key: 'meetingTitle', type: 'text', labelKey: 'meeting_title_label', required: true },
      { key: 'meetingDate', type: 'date', labelKey: 'meeting_date_label', required: true },
      { key: 'attendees', type: 'textarea', labelKey: 'attendees_label', required: true },
      {
        key: 'discussionPoints',
        type: 'textarea',
        labelKey: 'discussion_points_label',
        required: true,
      },
      { key: 'actionItems', type: 'textarea', labelKey: 'action_items_label', required: true },
      { key: 'nextSteps', type: 'textarea', labelKey: 'next_steps_label', required: true },
    ],
  },
  {
    id: 'meeting_reschedule',
    category: 'meetings',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'meetingTitle', type: 'text', labelKey: 'meeting_title_label', required: true },
      { key: 'originalDate', type: 'date', labelKey: 'original_date_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label', required: true },
      { key: 'proposedTimes', type: 'textarea', labelKey: 'proposed_times_label', required: true },
    ],
  },
  {
    id: 'meeting_cancellation',
    category: 'meetings',
    inputs: [
      { key: 'recipientName', type: 'text', labelKey: 'recipient_name_label', required: true },
      { key: 'meetingTitle', type: 'text', labelKey: 'meeting_title_label', required: true },
      { key: 'meetingDate', type: 'date', labelKey: 'meeting_date_label', required: true },
      { key: 'reason', type: 'textarea', labelKey: 'reason_label', required: true },
      { key: 'rescheduleNote', type: 'textarea', labelKey: 'reschedule_note_label' },
    ],
  },
];

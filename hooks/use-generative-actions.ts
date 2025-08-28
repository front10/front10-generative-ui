'use client';

import type { ChatMessage } from '@/lib/types';
import { generateUUID } from '@/lib/utils';

export interface UserAction {
  toolId: string;
  toolCallId?: string;
  action: string;
  data?: any;
  context?: any;
}

export function useGenerativeActions({
  sendMessage,
}: {
  sendMessage: (message: ChatMessage) => void;
}) {
  const handleUserAction = (action: UserAction) => {
    // Create descriptive messages based on actions
    let content = '';

    switch (action.action) {
      case 'add_to_cart':
        content = `I want to add ${action.data?.productName || 'this product'} to my cart`;
        break;
      case 'view_details':
        content = `Show me more details about ${action.data?.productName || 'this product'}`;
        break;
      case 'add_to_wishlist':
        content = `I want to add ${action.data?.productName || 'this product'} to my wishlist`;
        break;
      case 'share_product':
        content = `I want to share ${action.data?.productName || 'this product'}`;
        break;
      case 'create_event':
        content = `I want to create a new event`;
        break;
      case 'edit_event':
        content = `I want to edit the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'delete_event':
        content = `I want to delete the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'confirm_event':
        content = `I want to confirm the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'cancel_event':
        content = `I want to cancel the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'view_event_details':
        content = `Show me details for the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'share_event':
        content = `I want to share the event: ${action.data?.eventTitle || 'this event'}`;
        break;
      case 'retry_load':
        content = `Please retry loading the data`;
        break;
      case 'report_error':
        content = `I want to report an error: ${action.data?.error || 'unknown error'}`;
        break;
      case 'retry_load_events':
        content = `Please retry loading the calendar events`;
        break;
      case 'refresh_calendar':
        content = `Please refresh the calendar`;
        break;
      default:
        content = `I performed the action: ${action.action}`;
    }

    // Send to LLM using sendMessage (Vercel AI SDK v5)
    console.log('action', action);
    sendMessage({
      role: 'user',
      id: generateUUID(),
      parts: [
        {
          type: 'text',
          text: content,
        },
      ],
    });
  };

  return { handleUserAction };
}

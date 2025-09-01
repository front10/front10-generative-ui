import { z } from 'zod';
import type { InferUITool, UIMessage } from 'ai';
import type { getWeather } from './ai/tools/get-weather';
import type { createDocument } from './ai/tools/create-document';
import type { updateDocument } from './ai/tools/update-document';
import type { requestSuggestions } from './ai/tools/request-suggestions';
import type {
  getProductInfo,
  searchImages,
  analyzeSentimentTool,
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from '@/package/front10-generative-ui/examples';

import type { ArtifactKind } from '@/components/artifact';
import type { Suggestion } from './db/schema';

export type DataPart = { type: 'append-message'; message: string };

export const messageMetadataSchema = z.object({
  createdAt: z.string(),
});

export type MessageMetadata = z.infer<typeof messageMetadataSchema>;

type weatherTool = InferUITool<typeof getWeather>;
type createDocumentTool = InferUITool<ReturnType<typeof createDocument>>;
type updateDocumentTool = InferUITool<ReturnType<typeof updateDocument>>;
type requestSuggestionsTool = InferUITool<
  ReturnType<typeof requestSuggestions>
>;
type getProductInfoTool = InferUITool<typeof getProductInfo>;
type searchImagesTool = InferUITool<typeof searchImages>;
type analyzeSentimentToolType = InferUITool<typeof analyzeSentimentTool>;
type getEventsTool = InferUITool<typeof getEvents>;
type createEventTool = InferUITool<typeof createEvent>;
type updateEventTool = InferUITool<typeof updateEvent>;
type deleteEventTool = InferUITool<typeof deleteEvent>;

export type ChatTools = {
  getWeather: weatherTool;
  createDocument: createDocumentTool;
  updateDocument: updateDocumentTool;
  requestSuggestions: requestSuggestionsTool;
  getProductInfo: getProductInfoTool;
  searchImages: searchImagesTool;
  analyzeSentimentTool: analyzeSentimentToolType;
  getEvents: getEventsTool;
  createEvent: createEventTool;
  updateEvent: updateEventTool;
  deleteEvent: deleteEventTool;
};

export type CustomUIDataTypes = {
  textDelta: string;
  imageDelta: string;
  sheetDelta: string;
  codeDelta: string;
  suggestion: Suggestion;
  appendMessage: string;
  id: string;
  title: string;
  kind: ArtifactKind;
  clear: null;
  finish: null;
};

export type ChatMessage = UIMessage<
  MessageMetadata,
  CustomUIDataTypes,
  ChatTools
>;
export interface Attachment {
  name: string;
  url: string;
  contentType: string;
}

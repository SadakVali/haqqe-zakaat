import { ErrorResponseType } from '@/lib/error';
import { SuccessResponseType } from '@/lib/success';

export type ServerActionReturnType<T = unknown> =
  | SuccessResponseType<T>
  | ErrorResponseType;

// Hitesh
import { Document } from 'mongoose';

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages?: Array<Message>;
}

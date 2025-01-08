// src/models/Reaction.ts
import { Schema, Types } from 'mongoose';

export interface IReaction {
  reactionId: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}

const dateFormat = (timestamp: Date): string => {
  return new Date(timestamp).toLocaleString();
};

const ReactionSchema = new Schema<IReaction>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      transform: (date: Date) => dateFormat(date)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

export default ReactionSchema;
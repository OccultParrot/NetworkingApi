// src/models/Thought.ts
import { Schema, model, Document } from 'mongoose';
import ReactionSchema, { IReaction } from './Reaction.js';

export interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  reactions: IReaction[];
  reactionCount: number;
}

const dateFormat = (timestamp: Date): string => {
  return new Date(timestamp).toLocaleString();
};

const ThoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      transform: (date: Date) => dateFormat(date)
    },
    username: {
      type: String,
      required: true
    },
    reactions: [ReactionSchema]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

ThoughtSchema.virtual('reactionCount').get(function(this: IThought) {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', ThoughtSchema);

export default Thought;
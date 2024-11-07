import { Schema, model, type Document } from 'mongoose';

interface IThought extends Document {
  thoughtText: string;
  createdAt: string;
  username: string;
  reactions: Schema.Types.ObjectId[];
}

const ThoughtSchema = new Schema<IThought>({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: String,
    required: true,
    default: () => new Date().toLocaleString(),
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Reaction',
    },
  ],
}, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model<IThought>('Thought', ThoughtSchema);

export default Thought;
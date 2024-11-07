import { Schema, model, type Document} from 'mongoose';

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  username: string;
  // TODO: Reactions
}

const thoughtSchema = new Schema<IThought>({
  thoughtText: {
    type: String,
    required: true,
    // TODO: Must be between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    // TODO: Set default value to the current timestamp
    // TODO: Getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true,
  },
  // TODO: Reactions
})

// TODO: Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Thought = model<IThought>('Thought', thoughtSchema);

export default Thought;
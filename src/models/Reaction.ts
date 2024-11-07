import { Schema, model} from 'mongoose';

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    // TODO: Default value set to a new object ID
  },
  reactionBody: {
    type: String,
    required: true,
    // TODO: 280 character maximum
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    // TODO: Set default value to the current timestamp
    // TODO: Use a getter method to format the timestamp on query
  }
})

const Reaction = model("Reaction", reactionSchema);

export default Reaction;
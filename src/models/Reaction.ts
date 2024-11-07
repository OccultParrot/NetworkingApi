import { Schema, model} from 'mongoose';

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: Schema.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
    get: (timestamp: Date) => timestamp.toLocaleString()
  }
})

const Reaction = model("Reaction", reactionSchema);

export default Reaction;
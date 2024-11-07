import { Schema, model, type Document} from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  thoughts: Schema.Types.ObjectId[];
  friends: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
    // TODO: Trimming
  },
  email: {
    type: String,
    required: true,
    unique: true
    // TODO: Matching validation
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }
  ]
})

// TODO: Create a virtual called friendCount that retrieves the length of the user's friends array field on query

const User = model<IUser>('User', UserSchema);

export default User;
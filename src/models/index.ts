// src/models/index.ts
import User from './User.js';
import Thought from "./Thought.js";
import ReactionSchema from "./Reaction.js";

// Re-export interfaces
export type { IUser } from './User';
export type { IThought } from './Thought';
export type { IReaction } from './Reaction';

export { User, Thought, ReactionSchema };
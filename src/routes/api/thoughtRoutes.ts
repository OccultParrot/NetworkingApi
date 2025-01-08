import { Router } from 'express';
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} from '../../controllers/thoughtController.js';
const thoughtsRouter = Router();

// Thought routes
thoughtsRouter.route('/thoughts').get(getAllThoughts).post(createThought);
thoughtsRouter.route('/thoughts/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);
thoughtsRouter.route('/thoughts/:thoughtId/reactions').post(addReaction);
thoughtsRouter.route('/thoughts/:thoughtId/reactions/:reactionId').delete(deleteReaction);

export {thoughtsRouter};

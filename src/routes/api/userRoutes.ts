import { Router } from 'express';

import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} from '../../controllers/userController.js';

const usersRouter = Router();

// User routes
usersRouter.route('/users').get(getAllUsers).post(createUser);
usersRouter.route('/users/:userId').get(getUserById).put(updateUser).delete(deleteUser);
usersRouter.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

export {usersRouter};

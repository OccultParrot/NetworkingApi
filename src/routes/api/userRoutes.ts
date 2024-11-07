import { Router } from 'express';
const router = Router();
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} from '../../controllers/userController';

router.route('/').get(getAllUsers).post(createUser);

router.route('/:thoughtId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export {router as usersRouter};
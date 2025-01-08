import { Router } from 'express';
import { thoughtsRouter } from "./thoughtRoutes.js";
import { usersRouter } from "./userRoutes.js";

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', usersRouter);

export default router;

import { Router } from 'express';
import { thoughtsRouter } from "./thoughtRoutes";
import { usersRouter } from "./userRoutes";

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', usersRouter);

export default router;

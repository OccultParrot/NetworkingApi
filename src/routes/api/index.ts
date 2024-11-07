import { Router } from 'express';
import thoughtsRouter from "./thoughts";
import usersRouter from "./users";

const router = Router();

router.use('/thoughts', thoughtsRouter);
router.use('/users', usersRouter);

export default router;

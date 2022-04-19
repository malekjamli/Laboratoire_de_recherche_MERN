

import express from 'express';
import { createUser,getUser,getuserBYEmail} from '../controllers/user.controller.js';
const router = express.Router();
router.post('/', createUser);
router.get('/', getUser);
// localhost:3001/api/users/login
router.post('/login', getuserBYEmail);
export default router;
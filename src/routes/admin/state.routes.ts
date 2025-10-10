import express from 'express';
import { createState, listStates, getState, deleteState, bulkCreateStates } from '../../controllers/super_admin/state_controller';

const router = express.Router();

router.post('/', createState);
router.post('/bulk', bulkCreateStates);
router.get('/', listStates);
router.get('/:id', getState);
router.delete('/:id', deleteState);

export default router;

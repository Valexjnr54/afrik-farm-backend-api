import express from 'express';
import { createLga, listLgas, getLga, deleteLga } from '../../controllers/super_admin/lga_controller';

const router = express.Router();

router.post('/', createLga);
router.get('/', listLgas);
router.get('/:id', getLga);
router.delete('/:id', deleteLga);

export default router;

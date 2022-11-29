import express from 'express';
import * as goodController from '../controllers/goods';

export const router = express.Router();

router.get('/', goodController.getAll)
router.get('/:goodId', goodController.getOne)
router.post('/', goodController.add);
router.delete('/:goodId', goodController.remove);

import { Router } from "express";
import * as colorsController from '../controllers/colors';

export const router = Router();

router.get('/', colorsController.getAll);
router.get('/:colorId', colorsController.getOne);

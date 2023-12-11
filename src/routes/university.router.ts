import express from 'express';
import universityController from "../controller/universityController";

const router = express.Router();

router.get('/', universityController.getAllUnis);
router.get('/:id', universityController.getUniById);
router.post('/', universityController.createUni);
router.put('/:id', universityController.updateUni);
router.delete('/:id', universityController.deleteUniversity);

export default router;
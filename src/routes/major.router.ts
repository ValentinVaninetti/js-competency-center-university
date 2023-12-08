import express from 'express';
import majorController from "../controller/majorController";

const router = express.Router();

router.get('/', majorController.getAllMajors);
router.get('/:id', majorController.getMajorById);
router.post('/', majorController.createMajor);
router.put('/:id', majorController.updateMajor);
router.delete('/:id', majorController.deleteMajor);

export default router;
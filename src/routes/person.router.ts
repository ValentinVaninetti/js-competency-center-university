import express from 'express';
import personController from "../controller/personController";

const router = express.Router();

router.get('/', personController.getAllPersons);
router.get('/:id', personController.getPersonById);
router.post('/', personController.createPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

export default router;
import express from 'express';
import libraryController from "../controller/libraryController";

const router = express.Router();

router.get('/', libraryController.getAllLibraries);
router.get('/:id', libraryController.getLibraryById);
router.post('/', libraryController.createLibrary);
router.put('/:id', libraryController.updateLibrary);
router.delete('/:id', libraryController.deleteLibrary);

export default router;
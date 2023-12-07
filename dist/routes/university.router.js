"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const universityController_1 = __importDefault(require("../controller/universityController"));
const router = express_1.default.Router();
router.get('/', universityController_1.default.getAllUnis);
router.get('/:id', universityController_1.default.getUniById);
router.post('/', universityController_1.default.createUni);
router.put('/:id', universityController_1.default.updateUni);
router.delete('/:id', universityController_1.default.deleteUniversity);
exports.default = router;

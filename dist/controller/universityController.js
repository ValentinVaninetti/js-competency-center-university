"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const University_1 = __importDefault(require("../entities/university/University"));
class UniversityController {
    getAllUnis(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const unis = yield University_1.default.find();
                response.json(unis);
            }
            catch (error) {
                response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    getUniById(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniId = request.params.id;
            try {
                const university = yield University_1.default.findById(uniId);
                if (university) {
                    response.json(university);
                }
                else {
                    response.status(404).json({ message: 'University not found' });
                }
            }
            catch (error) {
                response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    createUni(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, location, departmentList } = request.body;
            const newUniversity = new University_1.default({
                name,
                location,
                departmentList: [],
            });
            try {
                const createdUniversity = yield newUniversity.save();
                response.json(createdUniversity);
            }
            catch (error) {
                response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    updateUni(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const uniId = request.params.id;
            const { name, location, departmentList } = request.body;
            try {
                const editedUniversity = yield University_1.default.findByIdAndUpdate(uniId, { name, location, departmentList }, { new: true });
                if (editedUniversity) {
                    response.json(editedUniversity);
                }
                else {
                    response.status(404).json({ message: 'University not found' });
                }
            }
            catch (error) {
                response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
    deleteUniversity(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const universityId = request.params.id;
            try {
                const deletedUniversity = yield University_1.default.findByIdAndDelete(universityId);
                if (deletedUniversity) {
                    response.json(deletedUniversity);
                }
                else {
                    response.status(404).json({ message: 'University not found' });
                }
            }
            catch (error) {
                response.status(500).json({ message: 'Internal Server Error' });
            }
        });
    }
}
exports.default = new UniversityController();

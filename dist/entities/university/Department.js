"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const departmentSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    majorList: [{ type: mongoose_1.Schema.ObjectId, ref: "Major" }]
});
const Department = (0, mongoose_1.model)('Department', departmentSchema);
exports.default = Department;

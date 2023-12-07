"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const majorSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    courseList: [{ type: mongoose_1.Schema.ObjectId, ref: "Course" }]
});
const Major = (0, mongoose_1.model)('Major', majorSchema);
exports.default = Major;

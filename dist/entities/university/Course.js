"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseSchema = new mongoose_1.Schema({
    courseName: { type: String, required: true },
    personList: [{ type: mongoose_1.Schema.ObjectId, ref: "Person" }],
    hoursPerWeek: { type: Number, required: true }
});
const Course = (0, mongoose_1.model)('Course', courseSchema);
exports.default = Course;

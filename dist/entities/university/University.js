"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const universitySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    departmentList: [{ type: mongoose_1.Schema.ObjectId, ref: "Department" }]
});
const University = (0, mongoose_1.model)('University', universitySchema);
exports.default = University;

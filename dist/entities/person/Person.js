"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const personSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    role: { Type: String, required: true },
});
const Person = (0, mongoose_1.model)('Person', personSchema);
exports.default = Person;

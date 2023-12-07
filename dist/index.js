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
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const university_router_1 = __importDefault(require("./routes/university.router"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(body_parser_1.default.json());
// Routes
app.get('/', (req, res) => {
    res.send('Express server running');
});
app.use('/api/university', university_router_1.default);
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb://localhost:27017/js-competency-center");
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    }
    catch (error) {
        console.error('Error starting the server:', error);
        if (error.name === 'MongoError') {
            console.error('MongoDB Connection Error:', error.message);
        }
        process.exit(1);
    }
});
start();

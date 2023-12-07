import mongoose from 'mongoose';
import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import universityRouter from "./routes/university.router";
import * as dotenv from "dotenv";

dotenv.config()
const app: Application = express();
const PORT: number = 3000;

app.use(bodyParser.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Express server running');
});

app.use('/api/university', universityRouter);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_CONN_STRING);
        console.log('Connected to MongoDB');

        app.listen(PORT, () => console.log(`Server started on ${PORT}`));
    } catch (error: any) {
        console.error('Error starting the server:', error);

        if (error.name === 'MongoError') {
            console.error('MongoDB Connection Error:', error.message);
        }

        process.exit(1);
    }
};


start();
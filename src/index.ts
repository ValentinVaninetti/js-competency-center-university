import express from "express";
import { connectToDatabase } from "./services/database.service"
import { universityRouter } from "./routes/university.router";
import bodyParser from "body-parser";

const app = express();
const port = 8080; // default port to listen
app.use()
connectToDatabase()
    .then(() => {
        app.use("/university", universityRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${8080}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
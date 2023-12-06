import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { university?: mongoDB.Collection } = {}

export async function connectToDatabase () {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING ?? "asd");

    await client.connect();

    const db: mongoDB.Db = client.db(process.env.DB_NAME ?? "nope");

    const universityCollection: mongoDB.Collection = db.collection(process.env.UNIVERSITY_COLLECTION_NAME ?? "default");

    collections.university = universityCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${universityCollection.collectionName}`);
}
connectToDatabase();
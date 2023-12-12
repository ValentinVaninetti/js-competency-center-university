import {Schema, model} from "mongoose";
import {IBook} from "../entitiesTypes";

const bookSchema = new Schema<IBook>({
    name: {type: String},
    type: {type: String},
    isRetired: {type: "Boolean"}
})

const Book = model('Book', bookSchema);
export default Book;
import {Schema, model} from "mongoose";
import {ILibrary} from "../entitiesTypes";

const librarySchema = new Schema<ILibrary>({
    bookList: {type: String},
    university: [{type: Schema.ObjectId, ref:"Book"}]
})

const Library = model('Library', librarySchema);
export default Library;
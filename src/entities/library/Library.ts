import {Schema, model} from "mongoose";
import {ILibrary} from "../entitiesTypes";

const librarySchema = new Schema<ILibrary>({
    bookList: {type: String},
    university: [{type: Schema.ObjectId, ref:"Book"}]
})
librarySchema.pre(/^find/, function(next){
    this.populate({
        path: 'majorList'
    })
    next();
})

const Library = model('Library', librarySchema);
export default Library;
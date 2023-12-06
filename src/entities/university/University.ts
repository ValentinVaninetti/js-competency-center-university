import {Schema, model} from "mongoose";
import {IUniversity} from "../entitiesTypes";

const universitySchema = new Schema<IUniversity>({
    name: {type: String, required: true},
    location: {type: String, required: true},
    departmentList: [{type: Schema.ObjectId, ref:"Department"}]
})

const University = model('University', universitySchema);
export default University;
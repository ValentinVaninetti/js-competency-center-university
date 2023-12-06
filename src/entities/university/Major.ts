import {Schema, model} from "mongoose";
import {IMajor} from "../entitiesTypes";

const majorSchema = new Schema<IMajor>({
    name: {type: String, required: true},
    courseList: [{type: Schema.ObjectId, ref:"Course"}]
})

const Major = model('Major', majorSchema);
export default Major;
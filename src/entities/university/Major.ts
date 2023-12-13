import {Schema, model} from "mongoose";
import {IMajor} from "../entitiesTypes";

const majorSchema = new Schema<IMajor>({
    name: {type: String, required: true},
    courseList: [{type: Schema.ObjectId, ref:"Course"}]
})
majorSchema.pre(/^find/, function(next){
    this.populate({
        path: 'courseList'
    })
    next();
})

const Major = model('Major', majorSchema);
export default Major;
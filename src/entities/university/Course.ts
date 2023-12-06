import {Schema, model} from "mongoose";
import {ICourse} from "../entitiesTypes";

const courseSchema = new Schema<ICourse>({
    courseName: {type: String, required: true},
    personList: [{type: Schema.ObjectId, ref:"Person"}],
    hoursPerWeek: {type: Number, required: true}
})

const Course = model('Course', courseSchema);
export default Course;
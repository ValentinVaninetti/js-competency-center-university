import {Schema, model} from "mongoose";
import {ICourse} from "../entitiesTypes";

const courseSchema = new Schema<ICourse>({
    courseName: {type: String, required: true},
    personList: [{type: Schema.ObjectId, ref:"Person"}],
    hoursPerWeek: {type: Number, required: true}
})
courseSchema.pre(/^find/, function(next){
    this.populate({
        path: 'personList'
    })
    next();
})

const Course = model('Course', courseSchema);
export default Course;
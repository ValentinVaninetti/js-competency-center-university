import {Schema, model} from "mongoose";
import {IDepartment} from "../entitiesTypes";

const departmentSchema = new Schema<IDepartment>({
    type: {type: String, required: true},
    majorList: [{type: Schema.ObjectId, ref:"Major"}]
})

const Department = model('Department', departmentSchema);
export default Department;
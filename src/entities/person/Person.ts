import {Schema, model} from "mongoose";
import {IPerson} from "../entitiesTypes";

const personSchema = new Schema<IPerson>({
    name: {type: String},
    age: {type: Number},
    role: {Type: String},
})

const Person = model('Person', personSchema);
export default Person;
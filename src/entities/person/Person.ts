import {Schema, model} from "mongoose";
import {IPerson} from "../entitiesTypes";

const personSchema = new Schema<IPerson>({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    role: {Type: String, required: true},
})

const Person = model('Person', personSchema);
export default Person;
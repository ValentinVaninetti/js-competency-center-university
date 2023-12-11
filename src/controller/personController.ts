import {Request, Response} from "express";
import Person from "../entities/person/Person";

class PersonController{
    async getAllPersons(request: Request, response: Response){
        try {
            const persons = await Person.find();
            response.json(persons);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getPersonById(request: Request, response: Response){
        const personId = request.params.id;
        try {
            const person = await Person.findById(personId);
            if (person) {
                response.json(person);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createPerson(request: Request, response: Response){
        const {name, age, role} = request.body;

        const newPerson = new Person({
            name,
            age,
            role
        })
        try {
            const createdPerson = await newPerson.save();
            response.json(createdPerson);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updatePerson(request: Request, response: Response){
        const personId = request.params.id;
        const { name, age, role } = request.body;

        try {
            const editedPerson = await Person.findByIdAndUpdate(
                personId,
                { name, age, role },
                { new: true }
            );

            if (editedPerson) {
                response.json(editedPerson);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deletePerson(request: Request, response: Response){
        const personId = request.params.id;

        try {
            const deletedPerson = await Person.findByIdAndDelete(personId);

            if (deletedPerson) {
                response.json(deletedPerson);
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new PersonController();
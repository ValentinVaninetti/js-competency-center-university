import {Request, Response} from "express";
import Person from "../entities/person/Person";

class PersonController{
    async getAllPersons(request: Request, response: Response){
        try {
            const persons = await Person.find();
            response.status(200).json({message:"Success", data:persons});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getPersonById(request: Request, response: Response){
        const personId = request.params.id;
        try {
            const person = await Person.findById(personId);
            if (person) {
                response.status(200).json({message:"Success", data:person});
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createPerson(request: Request, response: Response){
        try {
            const createPerson = await Person.create(request.body);
            response.status(201).json({status:"Success", data:createPerson});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updatePerson(request: Request, response: Response){
        try {
            const editedPerson = await Person.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedPerson) {
                response.status(200).json({status: "Success", data: editedPerson});
            } else {
                response.status(404).json({ message: 'University not found' });
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
                response.status(204).json({status:"Success", data:deletedPerson});
            } else {
                response.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new PersonController();
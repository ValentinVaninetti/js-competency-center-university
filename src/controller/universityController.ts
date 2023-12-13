import {Request, Response} from "express";
import University from "../entities/university/University"
class UniversityController{

    async getAllUnis(request: Request, response: Response) {
        try {
            const unis = await University.find()
            response.status(200).json({message:"Success", data:unis});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getUniById(request: Request, response: Response){
        const uniId = request.params.id;
        try {
            const university = await University.findById(uniId)
            if (university) {
                response.status(200).json({message: "Success", data: university});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createUni(request: Request, response: Response) {
        try {
            const createdUniversity = await University.create(request.body);
            response.status(201).json({status:"Success", data:createdUniversity});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateUni(request: Request, response: Response) {
        try {
            const editedUniversity = await University.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedUniversity) {
                response.status(200).json({status: "Success", data: editedUniversity});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteUniversity(request: Request, response: Response) {
        const universityId = request.params.id;

        try {
            const deletedUniversity = await University.findByIdAndDelete(universityId);

            if (deletedUniversity) {
                response.status(204).json({status:"Success", data:deletedUniversity});
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new UniversityController();
import {Request, Response} from "express";
import University from "../entities/university/University"
class UniversityController{

    async getAllUnis(request: Request, response: Response) {
        try {
            const unis = await University.find().populate('departmentList');
            response.json(unis);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getUniById(request: Request, response: Response){
        const uniId = request.params.id;
        try {
            const university = await University.findById(uniId).populate('departmentList');
            if (university) {
                response.json(university);
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
    async createUni(request: Request, response: Response) {
        const { name, location, departmentList }= request.body;

        const newUniversity = new University({
            name,
            location,
            departmentList:[],
        });

        try {
            const createdUniversity = await newUniversity.save();
            response.json(createdUniversity);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateUni(request: Request, response: Response) {
        const uniId = request.params.id;
        const { name, location, departmentList } = request.body;

        try {
            const editedUniversity = await University.findByIdAndUpdate(
                uniId,
                { name, location, departmentList },
                { new: true }
            );

            if (editedUniversity) {
                response.json(editedUniversity);
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
                response.json(deletedUniversity);
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}
export default new UniversityController();
import {Request, Response} from "express";
import Major from "../entities/university/Major";
import University from "../entities/university/University";

class MajorControllerr{
    async getAllMajors(request: Request, response: Response){
        try {
            const majors = await Major.find();
            response.json(majors);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getMajorById(request: Request, response: Response){
        const majorId = request.params.id;
        try {
            const major = await Major.findById(majorId);
            if (major) {
                response.json(major);
            } else {
                response.status(404).json({ message: 'Major not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createMajor(request: Request, response: Response){
        const {name, courseList} = request.body;

        const newMajor = new Major({
            name,
            courseList:[],
        })
        try {
            const createdMajor = await newMajor.save();
            response.json(createdMajor);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateMajor(request: Request, response: Response){
        const majorId = request.params.id;
        const { name, courseList } = request.body;

        try {
            const editedMajor = await Major.findByIdAndUpdate(
                majorId,
                { name, courseList },
                { new: true }
            );

            if (editedMajor) {
                response.json(editedMajor);
            } else {
                response.status(404).json({ message: 'Major not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteMajor(request: Request, response: Response){
        const majorId = request.params.id;

        try {
            const deletedMajor = await Major.findByIdAndDelete(majorId);

            if (deletedMajor) {
                response.json(deletedMajor);
            } else {
                response.status(404).json({ message: 'Major not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new MajorControllerr();
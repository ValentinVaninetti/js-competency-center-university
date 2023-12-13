import {Request, Response} from "express";
import Major from "../entities/university/Major";

class MajorControllerr{
    async getAllMajors(request: Request, response: Response){
        try {
            const majors = await Major.find();
            response.status(200).json({message:"Success", data:majors});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getMajorById(request: Request, response: Response){
        const majorId = request.params.id;
        try {
            const major = await Major.findById(majorId);
            if (major) {
                response.status(200).json({message:"Success", data:major});
            } else {
                response.status(404).json({ message: 'Major not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createMajor(request: Request, response: Response){
        try {
            const createdMajor = await Major.create(request.body);
            response.status(201).json({status:"Success", data:createdMajor});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateMajor(request: Request, response: Response){
        try {
            const editedMajor = await Major.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedMajor) {
                response.status(200).json({status: "Success", data: editedMajor});
            } else {
                response.status(404).json({ message: 'University not found' });
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
                response.status(204).json({status:"Success", data:deletedMajor});
            } else {
                response.status(404).json({ message: 'Major not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new MajorControllerr();
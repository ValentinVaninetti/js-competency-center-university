import {Request, Response} from "express";
import Department from "../entities/university/Department";

class DepartmentController{
    async getAllDepartments(request: Request, response: Response){
        try {
            const departments = await Department.find();
            response.status(200).json({message:"Success", data:departments});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getDepartmentById(request: Request, response: Response){
        const departmentId = request.params.id;
        try {
            const department = await Department.findById(departmentId);
            if (department) {
                response.status(200).json({message:"Success", data:department});
            } else {
                response.status(404).json({ message: 'Department not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createDepartment(request: Request, response: Response){
        try {
            const createdDepartment = await Department.create(request.body);
            response.status(201).json({status:"Success", data:createdDepartment});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateDepartment(request: Request, response: Response){
        try {
            const editedDepartment = await Department.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedDepartment) {
                response.status(200).json({status: "Success", data: editedDepartment});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteDepartment(request: Request, response: Response){
        const departmentId = request.params.id;

        try {
            const deletedDepartment = await Department.findByIdAndDelete(departmentId);

            if (deletedDepartment) {
                response.status(204).json({status:"Success", data: deletedDepartment});
            } else {
                response.status(404).json({ message: 'Department not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new DepartmentController();
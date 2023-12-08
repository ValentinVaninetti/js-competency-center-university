import {Request, Response} from "express";
import Department from "../entities/university/Department";

class DepartmentController{
    async getAllDepartments(request: Request, response: Response){
        try {
            const departments = await Department.find();
            response.json(departments);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getDepartmentById(request: Request, response: Response){
        const departmentId = request.params.id;
        try {
            const department = await Department.findById(departmentId);
            if (department) {
                response.json(department);
            } else {
                response.status(404).json({ message: 'Department not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createDepartment(request: Request, response: Response){
        const {type, majorList} = request.body;

        const newDepartmnet = new Department({
            type,
            majorList:[],
        })
        try {
            const createdDepartment = await newDepartmnet.save();
            response.json(createdDepartment);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateDepartment(request: Request, response: Response){
        const departmentId = request.params.id;
        const { type, majorList } = request.body;

        try {
            const editedDepartment = await Department.findByIdAndUpdate(
                departmentId,
                { type, majorList },
                { new: true }
            );

            if (editedDepartment) {
                response.json(editedDepartment);
            } else {
                response.status(404).json({ message: 'Department not found' });
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
                response.json(deletedDepartment);
            } else {
                response.status(404).json({ message: 'Department not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new DepartmentController();
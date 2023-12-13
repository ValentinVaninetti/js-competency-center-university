import {Request, Response} from "express";
import Course from "../entities/university/Course";

class CourseController{
    async getAllCourses(request: Request, response: Response){
        try {
            const courses = await Course.find();
            response.status(200).json({message:"Success", data:courses});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getCourseById(request: Request, response: Response){
        const courseId = request.params.id;
        try {
            const course = await Course.findById(courseId);
            if (course) {
                response.status(200).json({message:"Success", data:course});
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createCourse(request: Request, response: Response){
        try {
            const createdCourse = await Course.create(request.body);
            response.status(201).json({status:"Success", data:createdCourse});
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateCourse(request: Request, response: Response){
        try {
            const editedCourse = await Course.findByIdAndUpdate(
                request.params.id,
                request.body,
                { new: true }
            );
            if (editedCourse) {
                response.status(200).json({status: "Success", data: editedCourse});
            } else {
                response.status(404).json({ message: 'University not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async deleteCourse(request: Request, response: Response){
        const courseId = request.params.id;

        try {
            const deletedCourse = await Course.findByIdAndDelete(courseId);

            if (deletedCourse) {
                response.status(204).json({status:"Success", data:deletedCourse});
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new CourseController();
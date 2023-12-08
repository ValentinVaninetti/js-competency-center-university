import {Request, Response} from "express";
import Course from "../entities/university/Course";

class CourseController{
    async getAllCourses(request: Request, response: Response){
        try {
            const courses = await Course.find();
            response.json(courses);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getCourseById(request: Request, response: Response){
        const courseId = request.params.id;
        try {
            const course = await Course.findById(courseId);
            if (course) {
                response.json(course);
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createCourse(request: Request, response: Response){
        const {courseName, personList, hoursPerWeek} = request.body;

        const newCourse = new Course({
            courseName,
            personList:[],
            hoursPerWeek
        })
        try {
            const createdCourse = await newCourse.save();
            response.json(createdCourse);
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async updateCourse(request: Request, response: Response){
        const courseId = request.params.id;
        const { courseName, personList, hoursPerWeek } = request.body;

        try {
            const editedCourse = await Course.findByIdAndUpdate(
                courseId,
                { courseName, personList, hoursPerWeek },
                { new: true }
            );

            if (editedCourse) {
                response.json(editedCourse);
            } else {
                response.status(404).json({ message: 'Course not found' });
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
                response.json(deletedCourse);
            } else {
                response.status(404).json({ message: 'Course not found' });
            }
        } catch (error) {
            response.status(500).json({ message: 'Internal Server Error' });
        }
    }
}

export default new CourseController();
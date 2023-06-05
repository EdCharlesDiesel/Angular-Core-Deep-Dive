import {Request, Response} from 'express';
import {Products} from '../src/db-data';


export function getAllCourses(req: Request, res: Response) {


    res.status(200).json({payload: Object.values(Products)});


}


export function getCourseById(req: Request, res: Response) {

    const courseId = req.params['id'];

    const courses: any = Object.values(Products);

    const course = courses.find(course => course.id == courseId);

    res.status(200).json(course);
}

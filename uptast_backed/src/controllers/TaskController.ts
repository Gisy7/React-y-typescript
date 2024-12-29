import { Request, Response } from "express"
import colors from 'colors';
import { Proyect, ProyectType } from "../models/Proyect";
import { Task } from "../models/Task";
import { Types } from "mongoose";



export class TaskController {
    static createTask = async (req: Request, res: Response) => {
        try {
            const task = new Task(req.body)
            task.proyect = req.proyect._id as Types.ObjectId;
            req.proyect.task.push(task.id)
            await Promise.allSettled([task.save(), req.proyect.save()])
            res.status(201).send({ message: "Se ha creado la tarea con exito" })
        } catch (error) {
            console.error(colors.bgRed.bold("Se ha producido un error al crear una nueva tarea"))
            console.error(colors.red.bold(error))
        }
    }

    static getProyectTasks = async (req: Request, res: Response) => {
        try {

            console.log(req.proyect.id);
            const tasks = await Task.find({ proyect: req.proyect.id })
            res.json({ tasks })
        } catch (error) {
            console.error(colors.bgRed.bold("Se ha producido un error al listar las tareas"))
            console.error(colors.red.bold(error))
        }

    }
}
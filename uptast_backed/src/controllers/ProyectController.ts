import type { Request, Response } from "express"
import { Proyect } from "../models/Proyect"
import colors from 'colors';

export class ProyectController {

    static createProyect = async (req: Request, res: Response) => {
        const proyect = new Proyect(req.body)

        try {
            proyect.save()
            res.send("El proyecto se ha creado correctamente")
        } catch (error) {
            res.send("Error al crear un proyecto")
            console.error(colors.red.bold(error))
        }
    }

    static getAllProyects = async (req: Request, res: Response) => {


        try {
            const proyects = await Proyect.find({})
            res.json(proyects)
        } catch (error) {
            res.send("Error al mostrar todos los proyectos")
            console.error(colors.red.bold(error))
        }

    }

    static getProyectByID = async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const proyects = await Proyect.find({ _id: id })
            if (!proyects) {
                const error = new Error("No se ha encontrado el proyecto")
                res.status(404).send(error)
            }
            res.json(proyects)
        } catch (error) {
            res.send("Error al mostrar todos los proyectos")
            console.error(colors.red.bold(error))
        }

    }

    static editProyect = async (req: Request, res: Response) => {

        const { id } = req.params

        try {

            const proyect = await Proyect.findByIdAndUpdate({ _id: id }, req.body)

            if (!proyect) {
                const error = new Error("No se ha encontrado el proyecto")
                res.status(404).send(error)
                return
            }
            res.send("El proyecto se ha editado con exito")
            proyect.save()

        } catch (error) {
            res.send("Error al mostrar todos los proyectos")
            console.error(colors.red.bold(error))
        }
    }


    static deleteProyect = async (req: Request, res: Response) => {
        const { id } = req.params


        try {

            const proyect = await Proyect.findByIdAndDelete({ _id: id })

            if (!proyect) {
                const error = new Error("No se ha encontrado el proyecto")
                res.status(404).send(error)
                return
            }
            res.send("El proyecto se ha editado con exito")
            proyect.save()

        } catch (error) {
            res.send("Error al mostrar todos los proyectos")
            console.error(colors.red.bold(error))
        }
    }
}
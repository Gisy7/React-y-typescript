import { Request, Response, NextFunction } from "express"
import { Proyect, ProyectType } from "../models/Proyect"

declare global {
    namespace Express {
        interface Request {
            proyect: ProyectType
        }
    }
}


export const isProyectExist = async (req: Request, res: Response, next: NextFunction) => {
    const { projectid } = req.params

    const proyect = await Proyect.findById({ _id: projectid })

    req.proyect = proyect

    next()

    if (!proyect) {
        res.status(404).send({ error: "Proyecto no encontrado" })
    }
}
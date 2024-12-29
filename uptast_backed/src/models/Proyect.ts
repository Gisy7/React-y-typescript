import mongoose, { Document, PopulatedDoc, Schema, Types } from "mongoose"
import { TaskType } from "./Task"

export interface ProyectType extends Document {
    proyectName: String
    clientName: String
    description: String
    task: PopulatedDoc<TaskType & Document>[]
}

const proyectSchema: Schema = new Schema({
    proyectName: {
        type: String,
        trim: true
    },
    clientName: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    task: [
        {
            type: Types.ObjectId,
            ref: "Task"
        }
    ]
})

export const Proyect = mongoose.model<ProyectType>("Proyect", proyectSchema)
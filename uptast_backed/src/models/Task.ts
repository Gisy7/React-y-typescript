import mongoose, { Document, Schema, Types } from "mongoose"
import { Proyect } from './Proyect';

const status = {
    PENDING: "pending",
    ON_HOLD: "onHold",
    IN_PROGRESS: "inProgress",
    UNDER_REVIEW: "underReview",
    COMPLETED: "completed"
} as const


type TaskStatus = typeof status[keyof typeof status]


export interface TaskType extends Document {
    name: String
    description: String
    proyect: Types.ObjectId,
}

const taskSchema: Schema = new Schema({
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    proyect: {
        type: Types.ObjectId,
        ref: "Project"
    },
    status: {
        type: String,
        enum: Object.values(status),
        default: status.PENDING
    }
})

export const Task = mongoose.model<TaskType>("Task", taskSchema)
import mongoose from "mongoose"
import colors from 'colors';
import { exit } from 'node:process';

export const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(process.env.DATABASE_URL)
        const url = `${connection.host}${connection.port}`
        console.log(colors.magenta.bold(`Conexión existosa a la base de datos ${url}`));
    } catch (error) {
        console.error(colors.bgRed.bold(`No se ha podido conectar a la base de datos`))
        console.error(colors.red.bold(error))
        exit(1)
    }
}

import express from "express";
import router from "./router";
import db from "./config/db"
import colors from "colors"

// Conectar a la base de datos
async function connectDb() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.white.bold("conexion existosa"));
    } catch (error) {
        console.log(error);
        console.log(colors.bgRed.white("se ha producido un error a la hora de conectar a la base de datos"));
    }
}

connectDb()


// instancia de express
const server = express()

// Leer datos de formularios
server.use(express.json())

// Rutas de la api
server.use("/api", router)


export default server
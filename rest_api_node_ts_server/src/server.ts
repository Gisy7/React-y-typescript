import express from "express";

const server = express()

// Routing
server.get("/", (req, res) => {
    console.log("HOLA")

    res.send("Hola mundo")
})

export default server
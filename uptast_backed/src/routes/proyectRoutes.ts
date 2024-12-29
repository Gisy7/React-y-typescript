import { Router } from "express";
import { ProyectController } from "../controllers/ProyectController";
import { body, param } from 'express-validator';
import { validations } from "../middleware/validations";
import { TaskController } from '../controllers/TaskController';
import { isProyectExist } from "../middleware/proyect";

export const router = Router()


router.post("/",
    body("proyectName").notEmpty()
        .withMessage("El nombre del proyecto no peude estar vacio"),
    body("clientName").notEmpty()
        .withMessage("El cliente no puede estar vacio"),
    body("description").notEmpty()
        .withMessage("La descripcion no puede estar vacia"),
    validations,
    ProyectController.createProyect
)


router.get("/", ProyectController.getAllProyects)

router.get("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    validations,
    ProyectController.getProyectByID
)


router.put("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    body("proyectName").notEmpty()
        .withMessage("El nombre del proyecto no peude estar vacio"),
    body("clientName").notEmpty()
        .withMessage("El cliente no puede estar vacio"),
    body("description").notEmpty()
        .withMessage("La descripcion no puede estar vacia"),
    validations,
    ProyectController.editProyect

)


router.delete("/:id",
    param("id").isMongoId().withMessage("ID no valido"),
    validations,
    ProyectController.deleteProyect

)



// TASK PROJECTS //


router.post("/:projectid/tasks",
    isProyectExist,
    param("id").isMongoId().withMessage("ID no valido"),
    body("name").notEmpty()
        .withMessage("El nombre es obligatorio"),
    body("description").notEmpty()
        .withMessage("La descripción es obligatoria"),
    validations,
    TaskController.createTask
)


router.get("/:projectid/tasks",
    param("id").isMongoId().withMessage("ID no valido"),
    isProyectExist,
    TaskController.getProyectTasks

)





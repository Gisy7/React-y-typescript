import { Router } from "express"
import { createProduct, deleteProduct, editProduct, getProductById, getProducts } from "./handlers/product"
import express from 'express';
import { body, check, param, validationResult } from "express-validator";
import { handleInputErrors } from "./middleware";

const router = Router()

// Routing
router.get("/", getProducts)

router.get("/:id",
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    getProductById
)

router.post("/",
    body("name").notEmpty().withMessage("El nombre no puede estar vacio"),
    body("price")
        .notEmpty().withMessage("El precio no puede estar vacio")
        .isNumeric().withMessage("el precio tiene que ser un numero")
        .custom(value => value > 0).withMessage("el precio tiene que ser mayor a 0"),
    handleInputErrors,
    createProduct
)

router.patch("/:id",
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    editProduct
)

router.delete("/:id",
    param("id").isInt().withMessage("ID no valido"),
    handleInputErrors,
    deleteProduct
)


export default router
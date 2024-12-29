
import { Request, Response, NextFunction } from "express"
import { validationResult } from "express-validator"

export const validations = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    console.log(errors.array());
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() })
        return
    }

    next()
}
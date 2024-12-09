import { z } from "zod";
import { categoriesSchema, drinkSchema, drinksSchema, formSchema, RecipeAPIResponseSchema } from "../schema/schemaZod";

export type category = z.infer<typeof categoriesSchema>

export type formType = z.infer<typeof formSchema>

export type drinks = z.infer<typeof drinksSchema>

export type drink = z.infer<typeof drinkSchema>

export type recipeById = z.infer<typeof RecipeAPIResponseSchema>
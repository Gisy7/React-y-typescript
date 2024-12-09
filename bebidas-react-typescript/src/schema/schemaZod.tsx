import { z } from "zod";

export const categoriesSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})


export const drinksSchema = z.object({
    drinks: z.array(
        z.object({
            strDrink: z.string(),
            strDrinkThumb: z.string(),
            idDrink: z.string()
        })
    )
})


export const drinkSchema = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    idDrink: z.string()
})



export const formSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})



export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
  });
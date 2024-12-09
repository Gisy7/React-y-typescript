import axios from "axios"
import { categoriesSchema, drinksSchema, RecipeAPIResponseSchema } from "../schema/schemaZod"
import { drink, formType } from "../types";


const url = "https://www.thecocktaildb.com/api/json/v1/1/"


export const getCategories = async () => {
    const categories = `${url}list.php?c=list`
    const { data } = await axios(categories)

    const result = categoriesSchema.safeParse(data)

    if (result.success) {
        return result.data
    } else {
        console.error("Se ha producido un error en la respusta de categorias")
    }
}



export const searchRecipe = async (form: formType) => {
    const recipe = `${url}filter.php?c=${form.category}&i=${form.ingredient}`
    
    const { data } = await axios(recipe)

    const result = drinksSchema.safeParse(data)

    console.log(result)

    if (result.success) {
        return result.data
    } else {
        console.error("Se ha producido un error de la respuesta de drinks")
    }
}


export const selectRecipeById = async (id : drink["idDrink"]) => {
    const recipeById = `${url}lookup.php?i=${id}`

    const { data: { drinks }} = await axios(recipeById)

    const result = RecipeAPIResponseSchema.safeParse(drinks[0])
    
    if(result.success) {
        return result.data
    }  else {
        console.error("Se ha producido un error de la respuesta de selectRecipeById")
    }
    
}
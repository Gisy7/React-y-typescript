import { StateCreator } from "zustand";
import { category, drink, drinks, formType, recipeById } from "../types";
import { getCategories, searchRecipe, selectRecipeById } from "../services/RecipeService";


export type ingredientsType = {
    categories: category
    drinks: drinks
    recipeById: recipeById
    modal: boolean
    fetchCategories: () => Promise<void>,
    searchRecipe: (form : formType) => Promise<void>
    selectRecipe: (id : drink["idDrink"]) => Promise<void>
    setModal: () => void
}


export const createRecipeSlice : StateCreator<ingredientsType> = (set) => ({
    categories: {} as category,
    drinks: {} as drinks,
    recipeById: {} as recipeById,
    modal: false,
    fetchCategories: async() => { 
        const data = await getCategories()
        set({
            categories: data
        })
    },

    searchRecipe: async(form) => {
        const data = await searchRecipe(form)
        console.log(data)
        set({
            drinks: data
        })
    },

    selectRecipe: async(id) => {
        const data = await selectRecipeById(id)
        set({
            recipeById: data
        })

        set({
            modal: true
        })
    },

    setModal: () => {
        set((state) => ({
            modal: !state.modal
        }))
    }
    
})
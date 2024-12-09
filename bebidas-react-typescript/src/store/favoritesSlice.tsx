import { StateCreator } from "zustand";
import { drink, recipeById } from "../types";
import { notificationSlice, NotificationSliceType } from "./notificationSlice";


export type favoritesSlice = {
    favorites: recipeById[]
    handleClickFavorite: (recipe: recipeById) => void
    favoriteExist: (recipe: recipeById) => boolean
}

export const createFavoritesSlice: StateCreator<favoritesSlice & NotificationSliceType,[], [], favoritesSlice> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favoriteExist(recipe)) {
            set({
                favorites: get().favorites.filter((favorite) => recipe.idDrink !== favorite.idDrink)
            })

            notificationSlice(set, get, api).showNotification({text: "Eliminado de favoritos", error: false})
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            notificationSlice(set, get, api).showNotification({text: "Añadido a favoritos", error: false})

        }
    },

    favoriteExist: (recipe) => {
        return get().favorites.some((favorite => recipe.idDrink === favorite.idDrink))
    },



})
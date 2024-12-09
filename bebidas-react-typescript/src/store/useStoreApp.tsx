import { create } from "zustand";
import { createRecipeSlice, ingredientsType } from "./RecipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoritesSlice, favoritesSlice } from "./favoritesSlice";
import { notificationSlice, NotificationSliceType } from "./notificationSlice";

export const useStoreApp = create<ingredientsType & favoritesSlice & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...notificationSlice(...a),
})))
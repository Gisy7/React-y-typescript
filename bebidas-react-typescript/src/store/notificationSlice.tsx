import { StateCreator } from "zustand";
import { favoritesSlice } from "./favoritesSlice";

type notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notification: notification
    showNotification: (payload: Pick<notification, "text" | "error">) => void
    closeNotification: () => void 
} 


export const notificationSlice: StateCreator<NotificationSliceType & favoritesSlice,[],[], NotificationSliceType> 
= (set, get) => ({
    notification: {
        text: "Hola mundo",
        error: false,
        show: false,
    },
    showNotification: (payload) => {
        set({
            notification: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })

        setTimeout(() => {
            get().closeNotification()   
        }, 4000)
     
    },
    closeNotification: () => {
        set((state) => ({
            notification: {
                ...state.notification,
                show: false
            }
        }))
    }
})
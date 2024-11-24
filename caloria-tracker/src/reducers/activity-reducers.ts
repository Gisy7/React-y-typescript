import { activity } from "../types";




export type activityActions =
    { type: "save-activity", payload: { newActivities: activity } } |
    { type: "set-IdActivity", payload: { activityId: activity["id"] } } |
    { type: "edit-activity", payload: { editActivity: activity } } |
    { type: "delete-activity", payload: { activityId: activity["id"] } } |
    { type: "reset-activity" }




export type activityState = {
    activities: activity[],
    activityId: activity["id"]
}


const localStorageActivities = (): activity[] => {
    const activities = localStorage.getItem("activities")
    return activities ? JSON.parse(activities) : []
}

export const initialState: activityState = {
    activities: localStorageActivities(),
    activityId: ""
}



export const activityReducer = (state: activityState = initialState, action: activityActions): activityState => {


    console.table(state.activities);

    if (action.type === "save-activity") {
        let updateActivity: activity[] = []

        console.table(state.activities);

        if (state.activityId !== "") {

            const { name, categories, calories } = action.payload.newActivities


            updateActivity = state.activities.map((activity) => {
                if (activity.id === state.activityId) {
                    return {
                        ...activity,
                        name: name,
                        categories: categories,
                        calories: calories
                    }
                }
                return activity
            })

        } else {

            updateActivity = [...state.activities, action.payload.newActivities]
        }

        state.activityId = ""


        return {
            ...state,
            activities: updateActivity
        }
    }

    if (action.type === "set-IdActivity") {
        return {
            ...state,
            activityId: action.payload.activityId
        }
    }

    if (action.type === "delete-activity") {
        const deleteActivity = state.activities.filter((activity) => activity.id !== action.payload.activityId)

        return {
            ...state,
            activities: deleteActivity
        }
    }


    if (action.type === "reset-activity") {
        return {
            activities: [],
            activityId: ''
        }
    }
    return state
}



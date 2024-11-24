import { createContext, ReactNode, useMemo, useReducer } from "react"
import { activityActions, activityReducer, activityState, initialState } from "../reducers/activity-reducers"
import { activity, category } from "../types";
import { categories } from "../data/categories";


export type contextProps = {
    state: activityState;
    dispatch: React.Dispatch<activityActions>
    totalCalories: number,
    totalBurned: number,
    caloresAll: number,
    categoryName: (activityCategory: activity) => category | undefined
}


export const ActivityProvider = createContext<contextProps>(null!)


function ContextActivity({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(activityReducer, initialState)


    const totalCalories = state.activities.reduce((total, activity) => activity.categories === 1 ? total + activity.calories : total, 0)
    const totalBurned = state.activities.reduce((total, activity) => activity.categories === 2 ? total + activity.calories : total, 0)
    const caloresAll = totalBurned - totalCalories

    const categoryName = useMemo(() => (activityCategory: activity) => {
        const category = categories.find((category) => category.id === activityCategory.categories)
        if (category) {
            return category
        }

    }, [state.activities])


    return (
        <ActivityProvider.Provider
            value={
                {
                    state,
                    dispatch,
                    totalCalories,
                    totalBurned,
                    caloresAll,
                    categoryName
                }
            }
        >
            {children}
        </ActivityProvider.Provider>
    )

}

export default ContextActivity
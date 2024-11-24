import { createContext, Dispatch, ReactNode, useReducer } from 'react';

import { budgetActions, budgetReducer, budgetState, initialState } from '../reducer/budget-reducer';



export type reducerProps = {
    state: budgetState
    dispatch: Dispatch<budgetActions>
    totalAvailable: number,
    spentBudget: number
}


export type contextProps = {
    children: ReactNode
}

export const BudgetContext = createContext<reducerProps>(null!)


export const BudgetProvider = ({ children }: contextProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)


    const spentBudget = state.expenses.reduce((total, expense) => total + expense.amount, 0)
    const totalAvailable = state.budget - spentBudget


    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch,
                totalAvailable,
                spentBudget
            }}
        >
            {children}
        </BudgetContext.Provider >
    )
}


